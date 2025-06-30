// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import memoize from 'lodash/memoize';

import type { BestVaultResult, DepositOptionsResult, ProtocolWithPositions, Vault } from '@/api/types';
import type { DefiProtocol } from '@/components/DefiProtocolPositions/DefiProtocolPositions.types';
import type { CardData } from '@/components/DepositOptionsCarousel/DepositOptionsCarousel.types';
import type { WalletType } from '@/onChain/wallets/registry';
import { networkIdToNetworkName } from '@/onChain/wallets/registry';
import type { DefiAssetsListItem } from '@/screens/Earn/components/DefiFlatList/DefiFlatList.types';
import type { HighlightVault } from '@/screens/Earn/components/DefiHighlightHeroContent/DefiHighlightHeroContent.types';
import { adaptAssetNetworkToWalletType } from '@/utils/adaptAssetNetworkToWalletType';
import { adaptDepositOptionToCardData } from '@/utils/adaptDepositOptionToCardData';

const DEFAULT_FALLBACK_ASSET = 'ETH';

export const formatTopOpportunity = (data: BestVaultResult | null): HighlightVault | null => {
  if (!data) {
    return null;
  }

  const { asset, vault } = data;
  return {
    assetId: asset.assetId,
    assetAddress: asset.assetAddress,
    assetSymbol: asset?.symbol ?? DEFAULT_FALLBACK_ASSET,
    assetNetwork: adaptAssetNetworkToWalletType(asset.networkName),
    apy: vault.apy.total / 100,
    tvlInUsd: vault.tvlInUsd,
    protocolName: vault.protocol.name,
    protocolLogoUrl: vault.protocol.protocolLogo,
  };
};

export const formatAssetListData = (depositOptions: DepositOptionsResult): DefiAssetsListItem[] => {
  return depositOptions.userBalances.map(({ asset, depositOptions }) => ({
    assetId: asset.assetId,
    assetName: asset.name,
    assetSymbol: asset.symbol ?? DEFAULT_FALLBACK_ASSET,
    assetNetwork: adaptAssetNetworkToWalletType(asset.networkName),
    maxAPY: getMaxAPY(depositOptions),
    protocols: depositOptions.map(depositOption => ({
      name: depositOption.protocol.name,
      protocolLogo: depositOption.protocol.protocolLogo,
      apy: depositOption.apy.total / 100,
      tvlInUsd: depositOption.tvlInUsd,
      vaultAddress: depositOption.vaultAddress,
      vaultNetwork: adaptAssetNetworkToWalletType(depositOption.networkName),
      assetId: asset.assetId,
    })),
  }));
};

function getMaxAPY(depositOptions: Vault[]) {
  let maxAPY = 0;

  for (const depositOption of depositOptions) {
    if (depositOption.apy.total > maxAPY) {
      maxAPY = depositOption.apy.total;
    }
  }

  return maxAPY / 100;
}

const MAX_CARDS = 30;

export const selectCardData = memoize((depositOptions: DepositOptionsResult): CardData[] => {
  const options = depositOptions.userBalances.map(({ asset, depositOptions }) => {
    return depositOptions.map(depositOption => adaptDepositOptionToCardData(depositOption, asset));
  });

  if (options.length === 0) {
    return [];
  }

  return filterOutAndSelectRandomCards(options.flat());
});

const filterOutAndSelectRandomCards = (cards: CardData[]) => {
  const filteredCards = cards.filter(card => {
    const apyNum = Number(card.protocolApy.slice(0, -1));
    const isApyHalfPercent = apyNum >= 0.5;

    return isApyHalfPercent;
  });

  const filteredCardsLength = filteredCards.length;
  const randomCards = [];
  const prevRandomNumbers: number[] = [];

  for (let i = 0; i < MAX_CARDS; i++) {
    const randomNumber = Math.floor(Math.random() * filteredCardsLength);

    if (!prevRandomNumbers.includes(randomNumber)) {
      randomCards.push(filteredCards[randomNumber]);
      prevRandomNumbers.push(randomNumber);
    }
  }

  return randomCards;
};

function adaptVaultNetworkToWalletType(vaultNetwork?: string) {
  if (!vaultNetwork) {
    return 'ethereum';
  }

  return vaultNetwork.startsWith('eip') ? (networkIdToNetworkName[vaultNetwork] ?? 'ethereum') : adaptAssetNetworkToWalletType(vaultNetwork);
}

export function mapDefiProtocols(protocolsWithPositions: ProtocolWithPositions[]): DefiProtocol[] {
  return protocolsWithPositions.map(({ protocol, positions }) => ({
    id: protocol.id,
    protocolName: protocol.name,
    protocolIcon: protocol.logoUrl || '',
    totalValueInUsd: protocol.balanceUsd,
    positions: positions.map(position => ({
      id: `${position.assets.map(asset => asset.address).join('-')}-${Math.random()}`,
      apy: position.apy ? position.apy / 100 : undefined,
      isDebt: position.isDebt,
      positionUsdValue: position.positionUsdValue,
      assets: position.assets.map(asset => ({
        id: asset.assetId,
        address: asset.address,
        decimals: asset.decimals,
        network: (asset.network === 'mainnet' ? 'ethereum' : asset.network) as WalletType,
        symbol: asset.symbol,
        balanceNative: asset.balanceNative,
        balanceUsd: asset.balanceUsdValue,
        portion: asset.portion,
      })),
      vaultAddress: position.vaultAddress,
      vaultNetwork: adaptVaultNetworkToWalletType(position.vaultNetwork),
    })),
  }));
}
