// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import type { DefiAssetsListItem } from '../DefiFlatList/DefiFlatList.types';

export interface DefiAssetRowProps {
  asset: DefiAssetsListItem;
  onSelect: (asset: DefiAssetsListItem) => void;
}
