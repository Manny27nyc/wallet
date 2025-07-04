// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export type ExploreScrollViewProps = {
  children: ReactNode;
  style?: ViewStyle;
  insetHeaderHeight?: boolean;
};
