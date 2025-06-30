// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import type { SubWallet } from '../OnboardingImportSubWalletsScreen.types';

export const fetchSubWalletByAccountCache: Record<string, SubWallet | null> = {};
