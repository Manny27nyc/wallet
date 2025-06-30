// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export const isRealmObject = (item: object): item is Realm.Object => 'isValid' in item;
