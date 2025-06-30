// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
import sortBy from 'lodash/sortBy';

export function sortWithKrakenFirst(list: string[], moveKrakenToFront = true) {
  const sorted = sortBy(list);

  if (moveKrakenToFront) {
    const kxIndex = sorted.findIndex(t => t.toLowerCase() === 'kraken');

    if (kxIndex > -1) {
      const kx = sorted.splice(kxIndex, 1);

      return [...kx, ...sorted];
    }
    return sorted;
  }

  return sorted;
}
