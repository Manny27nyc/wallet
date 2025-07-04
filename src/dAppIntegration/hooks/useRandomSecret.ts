// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { useMemo } from 'react';

import crypto from 'crypto';

export const useRandomSecret = () => {
  return useMemo(() => {
    const secretBuffer = crypto.randomBytes(32);

    return secretBuffer.toString('hex');
  }, []);
};
