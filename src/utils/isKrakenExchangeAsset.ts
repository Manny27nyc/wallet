// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import type { KrakenAssetSupported } from '@/api/krakenConnect/types';
import type { RealmToken } from '@/realm/tokens';
import type { RemoteAsset } from '@/types';

export const isKrakenExchangeAsset = (token: RealmToken | RemoteAsset | KrakenAssetSupported): token is KrakenAssetSupported => 'isSupported' in token;
