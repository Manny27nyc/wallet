// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import Config from 'react-native-config';

export const DEFAULT_HARMONY_BASE_URI = Config.DEFAULT_HARMONY_BASE_URI;
const ALT_HARMONY_BASE_URIS_1 = Config.ALT_HARMONY_BASE_URIS_1;
const ALT_HARMONY_BASE_URIS_2 = Config.ALT_HARMONY_BASE_URIS_2;
export const ALT_HARMONY_BASE_URIS = [ALT_HARMONY_BASE_URIS_1, ALT_HARMONY_BASE_URIS_2];

export const DEFAULT_GROUNDCONTROL_BASE_URI = Config.DEFAULT_GROUNDCONTROL_BASE_URI;
export const HARMONY_CF_CLIENT_ID = Config.HARMONY_CF_CLIENT_ID;
export const HARMONY_CF_CLIENT_SECRET = Config.HARMONY_CF_CLIENT_SECRET;

const ALT_GROUNDCONTROL_BASE_URIS_1 = Config.ALT_GROUNDCONTROL_BASE_URIS_1;
const ALT_GROUNDCONTROL_BASE_URIS_2 = Config.ALT_GROUNDCONTROL_BASE_URIS_2;

export const ALT_GROUNDCONTROL_BASE_URIS = [ALT_GROUNDCONTROL_BASE_URIS_1, ALT_GROUNDCONTROL_BASE_URIS_2];
export const WALLETCONNECT_PROJECT_ID = Config.WALLETCONNECT_PROJECT_ID;

export const URLs = {
  privacyPolicy: 'https://www.kraken.com/wallet/privacy',
  termsOfService: 'https://www.kraken.com/wallet/legal',
  releaseNotes: 'https://blog.kraken.com/category/product/kraken-wallet',
  supportArticles: 'https://support.kraken.com/hc/en-us/categories/kraken-wallet',
  supportContact: 'https://support.kraken.com/hc/en-us/forms/24835178652180',
  signUp: 'https://www.kraken.com/sign-up',
  oauthRedirect: 'krakenwallet://krakenconnect',
};

export const DISABLE_PREVENT_SCREEN_CAPTURE = Config.DISABLE_PREVENT_SCREEN_CAPTURE;
export const STORYBOOK_ENABLED = Config.STORYBOOK_ENABLED;

export const KRAKEN_API_URI = Config.KRAKEN_API_URI;
export const KRAKEN_CONNECT_CLIENT_ID = Config.KRAKEN_CONNECT_CLIENT_ID;

export const KRAKEN_CONNECT_OAUTH_AUTH_URI = Config.KRAKEN_CONNECT_OAUTH_AUTH_URI;
