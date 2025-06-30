// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export function isBtcOrDoge(walletType: string) {
  return ['HDsegwitBech32', 'dogecoin'].includes(walletType);
}
