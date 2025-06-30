// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useBottomElementSpacing = (marginBottom = 16) => {
  const insets = useSafeAreaInsets();

  return insets.bottom + marginBottom;
};
