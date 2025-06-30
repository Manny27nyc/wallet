// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { useQuery } from '@tanstack/react-query';

import { useKrakenAssetsWithPrices } from '@/reactQuery/hooks/krakenConnect/useKrakenAssetsWithPrices';
import { useCurrentUsdFiatRate } from '@/realm/usdFiatRates';

export const useKrakenConnectBalance = () => {
  const { data: assetsWithPrices, isFetching } = useKrakenAssetsWithPrices();
  const fiatRate = useCurrentUsdFiatRate();

  return useQuery({
    queryKey: ['krakenConnectBalance', fiatRate, assetsWithPrices],
    enabled: !!assetsWithPrices && !isFetching,
    queryFn: async () => {
      if (!assetsWithPrices) {
        return 0;
      }
      let totalUsdBalance = 0;
      assetsWithPrices.map(asset => {
        totalUsdBalance += asset.balanceInUsd;
      });
      return totalUsdBalance * fiatRate;
    },
  });
};
