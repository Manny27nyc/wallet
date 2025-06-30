// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import type { REPUTATION } from '@/hooks/useReputation';

export type ReputationFilters = {
  [REPUTATION.UNVERIFIED]: boolean;
  [REPUTATION.BLACKLISTED]: boolean;
};
