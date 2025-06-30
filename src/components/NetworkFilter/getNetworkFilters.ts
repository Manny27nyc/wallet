// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import type { NETWORK_FILTER, UINetworkFilter } from './types';

export function getNetworkFilters(filterOption: UINetworkFilter): NETWORK_FILTER[] {
  return filterOption === 'all' ? [] : [filterOption];
}
