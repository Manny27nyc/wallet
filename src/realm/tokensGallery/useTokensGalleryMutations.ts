// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { useCallback } from 'react';

import { useRealm } from '@/realm/RealmContext';

import type { RealmToken } from '../tokens';

export const useTokensGalleryMutations = () => {
  const realm = useRealm();

  const addTokenToGallery = useCallback(
    (token: RealmToken) => {
      realm.write(() => {
        token.inGallery = 'manuallyAdded';
      });
    },
    [realm],
  );

  const removeTokenFromGallery = useCallback(
    (token: RealmToken) => {
      realm.write(() => {
        token.inGallery = 'manuallyRemoved';
      });
    },
    [realm],
  );

  return {
    addTokenToGallery,
    removeTokenFromGallery,
  };
};
