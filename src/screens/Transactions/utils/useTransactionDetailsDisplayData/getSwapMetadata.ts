// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import type { AssetMetadata } from '@/realm/assetMetadata';

export function getSwapMetadata(txnType: string, metadata: { sentMetadata: AssetMetadata | undefined; receiveMetadata: AssetMetadata | undefined }) {
  return txnType === 'swap' && metadata.sentMetadata && metadata.receiveMetadata
    ? { sent: metadata.sentMetadata, receive: metadata.receiveMetadata }
    : undefined;
}
