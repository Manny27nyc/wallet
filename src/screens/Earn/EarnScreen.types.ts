// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export enum SectionName {
  HighlightHero,
  DepositOptionsCarousel,
  AssetsListHeader,
  AssetsList,
  AssetsListItem,
  AssetsListItemSkeleton,
}

export interface Section {
  section: SectionName;
}
