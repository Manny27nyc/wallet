// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import type { RealmToken } from '@/realm/tokens/schema';
import { REALM_TYPE_TOKEN } from '@/realm/tokens/schema';

import type Realm from 'realm';

export const getTokenById = (realm: Realm, id: string | null) => {
  if (!id) {
    return null;
  }
  return realm.objectForPrimaryKey<RealmToken>(REALM_TYPE_TOKEN, id);
};

export const getTokenByAssetId = (realm: Realm, assetId: string, walletId: string) => {
  return realm.objectForPrimaryKey<RealmToken>(REALM_TYPE_TOKEN, `${walletId}:${assetId}`);
};
