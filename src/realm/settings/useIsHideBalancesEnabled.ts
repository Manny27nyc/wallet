// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { RealmSettingsKey } from './schema';
import { useSettingsByKey } from './useSettingsByKey';

export const useIsHideBalancesEnabled = () => {
  return !!useSettingsByKey(RealmSettingsKey.hideBalances);
};
