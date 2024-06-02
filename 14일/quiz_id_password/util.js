export const HasSpecial = (value) =>
  [..."!@#$%^&*"].some((v) => value.includes(v));
export const isValidLength = (length) => 4 <= length && length <= 10;
