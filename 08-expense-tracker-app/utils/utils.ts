/**
 * Formats a string number by replacing decimal point with comma and removing leading zeros
 * @param value - The string number to format
 * @returns The formatted string number
 * @example
 * formatStringNumber('0123.45') // returns '123,45'
 * formatStringNumber('01.23') // returns '1,23'
 */
export const formatStringNumber = (value: string): string => {
  return value.replace('.', ',').replace(/^0+(?=\d)/, '');
};

/**
 * Converts a string number with to a number
 * @param value - The string number to parse (e.g. '123,45')
 * @returns The parsed number (e.g. 123.45)
 * @example
 * parseNumber('123,45') // returns 123.45
 * parseNumber('1,23') // returns 1.23
 */

export const parseNumber = (value: string): number => {
  return Number(value.replace(',', '.'));
};
