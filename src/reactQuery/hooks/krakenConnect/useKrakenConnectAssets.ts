// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { useQuery } from '@tanstack/react-query';

import BigNumber from 'bignumber.js';

import { fetchKrakenPrivateApi } from '@/api/krakenConnect/base/fetchKrakenPrivateApi';
import type { AssetsDict, KrakenAsset, KrakenAssetRaw } from '@/api/krakenConnect/types';
import { getNativeTokenBySymbol } from '@/onChain/wallets/registry';

import { useKrakenConnectCredentials } from '@/realm/krakenConnect/useKrakenConnectCredentials';

import { type RealmToken, useTokens } from '@/realm/tokens';
import { useRealmWallets } from '@/realm/wallets';
import { mapAllAssetsToMainAssets } from '@/screens/KrakenConnectTransfer/utils';
import type { RemoteAsset } from '@/types';
import { isRealmToken } from '@/utils/isRealmToken';

import { tokenUnit2SmallestUnit } from '@/utils/unitConverter';

import { useKrakenTokenListQuery } from '../useTokenListsQuery';

import { handleError } from '/helpers/errorHandler';
import loc from '/loc';

const STALE_TIME = 15 * 60 * 1000;

const useKrakenAccountAssets = () => {
  const { API_SECRET, API_KEY } = useKrakenConnectCredentials();

  async function getKrakenBalance() {
    if (!API_KEY || !API_SECRET) {
      return {};
    }
    const response = await fetchKrakenPrivateApi<AssetsDict>({
      path: '/0/private/BalanceEx',
      apiKey: API_KEY,
      privateKey: API_SECRET,
      method: 'POST',
    });

    return response.result;
  }

  return useQuery({
    queryKey: ['krakenAccountAssets', API_KEY],
    staleTime: STALE_TIME,
    queryFn: async () => {
      const krakenBalance = await getKrakenBalance();
      if (!krakenBalance) {
        throw new Error('Failed to fetch Kraken balances');
      }
      return mapAllAssetsToMainAssets(krakenBalance).filter(asset => BigNumber(asset.balance).isGreaterThan(0));
    },
  });
};

export const useKrakenConnectAssets = () => {
  const { data: krakenConnectAssets, error, refetch: refetchKrakenBalance } = useKrakenAccountAssets();
  const { data: remoteAssets } = useKrakenTokenListQuery();

  if (error) {
    handleError(error, 'ERROR_CONTEXT_PLACEHOLDER', { text: loc.krakenConnect.errors.fetchBalance });
  }

  const tokens = useTokens();
  const wallets = useRealmWallets();

  const query = useQuery({
    queryKey: ['krakenAssets', krakenConnectAssets, remoteAssets],
    enabled: !!remoteAssets && !!krakenConnectAssets,
    queryFn: () => {
      if (!remoteAssets || !krakenConnectAssets) {
        throw new Error('Kraken assets not found.');
      }

      const matchKrakenAssetWithKnownToken = (krakenAsset: KrakenAssetRaw): KrakenAsset => {
        let asset: RemoteAsset | RealmToken | undefined = remoteAssets.find(asset => asset.metadata.symbol.toLowerCase() === krakenAsset.symbol.toLowerCase());
        let walletId;
        if (!asset) {
          const nativeTokenCaipId = getNativeTokenBySymbol(krakenAsset.symbol)?.nativeTokenCaipId;
          if (nativeTokenCaipId) {
            const filteredTokens = tokens.filtered('assetId = $0', nativeTokenCaipId);
            if (tokens.length > 0) {
              asset = filteredTokens[0];
              walletId = asset.walletId;
            }
          }
        } else {
          const wallet = wallets.filtered(`type == $0`, asset.metadata.walletType);
          if (wallet) {
            walletId = wallet[0].id;
          }
        }

        const balance = asset?.metadata ? tokenUnit2SmallestUnit(krakenAsset.balance, asset.metadata.decimals).toString(10) : krakenAsset.balance;
        const hold_trade = asset?.metadata ? tokenUnit2SmallestUnit(krakenAsset.hold_trade, asset.metadata.decimals).toString(10) : krakenAsset.hold_trade;

        if (asset !== undefined && walletId) {
          return {
            assetId: asset.assetId,
            metadata: isRealmToken(asset) ? asset.metadata.toJSON() : asset.metadata,
            isSupported: true,
            walletId: walletId,
            ...krakenAsset,
            balance,
            hold_trade,
          };
        }

        return {
          isSupported: false,
          ...krakenAsset,
          balance,
          hold_trade,
        };
      };

      return krakenConnectAssets.map(matchKrakenAssetWithKnownToken);
    },
  });

  return {
    ...query,
    refetchKrakenBalance,
  };
};
