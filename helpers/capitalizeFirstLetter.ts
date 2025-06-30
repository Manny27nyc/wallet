// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export function capitalizeFirstLetter(string: unknown) {
  return String(string).charAt(0).toUpperCase() + String(string).slice(1);
}
