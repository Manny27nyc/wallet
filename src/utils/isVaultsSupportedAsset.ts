// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { VAULTS_SUPPORTED_NETWORKS } from '@/api/earn/utils';

export const isVaultsSupportedAsset = (assetId: string) => (VAULTS_SUPPORTED_NETWORKS as string[]).some(n => assetId.startsWith(n));
