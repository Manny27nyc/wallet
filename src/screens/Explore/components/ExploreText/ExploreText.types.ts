// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import type { ReactElement } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { AnimatedStyle } from 'react-native-reanimated';

import type { TypographyKey } from '@/components/Label';
import type { Theme } from '@/theme/themes';

export type TextColor = keyof Theme['colors'];
export type ExploreTextProps = {
  title?: string;
  body?: string;
  style?: StyleProp<ViewStyle>;
  titleType?: TypographyKey;
  titleStyle?: StyleProp<AnimatedStyle<StyleProp<TextStyle>>>;
  titleColor?: TextColor;
  titleLines?: number;
  titleIcon?: ReactElement;
  bodyType?: TypographyKey;
  bodyStyle?: StyleProp<AnimatedStyle<StyleProp<TextStyle>>>;
  bodyColor?: TextColor;
  bodyLines?: number;
  onPress?: () => void;
};
