import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  return str == '' ? '' : str.match(/((.)\2{0,})/g).map(item => item.length > 1 ? item.length + item[0] : item).join('');
}
