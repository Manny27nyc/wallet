// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export function createGoogleSearchUrl(searchValue: string) {
  return `https://www.google.com/search?q=${encodeURIComponent(searchValue)}`;
}
