// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export function realmListToFlashListData<T>(data?: ReadonlyArray<T> | null) {
  return data?.slice(0);
}
