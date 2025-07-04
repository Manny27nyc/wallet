// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { useState } from 'react';

import type { NETWORK_FILTER } from './types';

export const useNetworkFilter = (initial: NETWORK_FILTER[] = []) => {
  return useState<NETWORK_FILTER[]>(initial);
};
