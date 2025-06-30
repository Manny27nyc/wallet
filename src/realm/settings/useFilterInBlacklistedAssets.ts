// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { RealmSettingsKey } from './schema';
import { useSettingsByKey } from './useSettingsByKey';

const DEFAULT_SETTING = false;

export const useFilterInBlacklistedAssets = () => {
  const value = useSettingsByKey(RealmSettingsKey.filterInBlacklistedAssets);

  if (value === undefined) {
    return DEFAULT_SETTING;
  }

  return value;
};
