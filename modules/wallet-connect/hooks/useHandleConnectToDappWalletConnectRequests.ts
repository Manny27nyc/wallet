// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { Linking } from 'react-native';

import { useInitialUrl } from '@/hooks/useInitialUrl';
import { useRealm } from '@/realm/RealmContext';
import { useWalletConnectTopicsMutations } from '@/realm/walletConnectTopics/useWalletConnectTopicsMutations';
import type { RealmWallet } from '@/realm/wallets';
import { REALM_TYPE_WALLET } from '@/realm/wallets';
import { useSecuredKeychain } from '@/secureStore/SecuredKeychainProvider';

import { useUnencryptedRealm } from '@/unencrypted-realm/RealmContext';

import { handleConnectToDappWalletConnectUri } from '../handleConnectToDappWalletConnectUri';
import { matchPairingTopic } from '../utils';

export const useHandleConnectToDappWalletConnectRequests = () => {
  const realm = useRealm();
  const unencryptedRealm = useUnencryptedRealm();
  const { getSeed } = useSecuredKeychain();
  const navigation = useNavigation();
  const { saveTopicToRealm } = useWalletConnectTopicsMutations();

  const handleConnectToDappWalletConnectRequests = useCallback(
    (event: { url: string }) => {
      const url = event.url;

      if (url) {
        const parsedUrl = new URL(url);
        const uri = isConnectToDappWalletConnectRequest(url, parsedUrl.searchParams);
        const initialWalletsCount = realm.objects<RealmWallet>(REALM_TYPE_WALLET).snapshot().length;
        const shouldOnboard = !initialWalletsCount;

        if (uri && !shouldOnboard) {
          const pairingTopic = matchPairingTopic(uri);

          if (pairingTopic) {
            const topic = '';
            const isDeepLinked = true;

            saveTopicToRealm(pairingTopic, topic, isDeepLinked);
            handleConnectToDappWalletConnectUri(uri, realm, unencryptedRealm, navigation.dispatch, getSeed);
          }
        }
      }
    },
    [realm, unencryptedRealm, navigation.dispatch, getSeed, saveTopicToRealm],
  );

  const { initialUrl, processingInitialUrl } = useInitialUrl();

  if (!processingInitialUrl && initialUrl) {
    handleConnectToDappWalletConnectRequests({ url: initialUrl });
  }

  useEffect(
    () => {
      const listener = Linking.addEventListener('url', handleConnectToDappWalletConnectRequests);
      return () => {
        listener.remove();
      };
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
};

const isConnectToDappWalletConnectRequest = (url: string, queryParams: URLSearchParams): string | false => {
  const uri = url.startsWith('wc:') ? url : queryParams.get('uri');

  const isSessionRequest = uri?.includes('requestId');

  return uri && !isSessionRequest ? uri : false;
};
