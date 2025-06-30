// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export interface BrowserWebViewRef {
  navigateBack: () => void;
  navigateForward: () => void;
  reloadPage: () => void;
  disconnect: () => void;
}
