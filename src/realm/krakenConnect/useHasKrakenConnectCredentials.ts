// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import { useKrakenConnectCredentials } from './useKrakenConnectCredentials';

export const useHasKrakenConnectCredentials = () => {
  const { API_KEY, API_SECRET } = useKrakenConnectCredentials();
  return !!API_KEY && !!API_SECRET;
};
