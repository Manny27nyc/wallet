// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { RealmSettingsKey } from './schema';
import { useSettingsByKey } from './useSettingsByKey';

const DEFAULT_SETTING = true;

export const useFilterInUnverifiedAssets = () => {
  const value = useSettingsByKey(RealmSettingsKey.filterInUnverifiedAssets);

  if (value === undefined) {
    return DEFAULT_SETTING;
  }

  return value;
};
