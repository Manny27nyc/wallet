// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export type AnimationMarkers = Record<
  `part-${number}`,
  {
    start: number;
    end: number;
  }
>;
