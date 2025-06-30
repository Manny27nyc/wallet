// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import type { DefiProtocol } from '../DefiAssetProtocolRow/DefiAssetProtocolRow.types';

export enum SheetPosition {
  'MEDIUM' = 0,
  'HIGH' = 1,
}

export interface DefiEarnSheetProps {
  onCloseEarnSheet: () => void;
  assetId: string;
  protocols: DefiProtocol[];
}
