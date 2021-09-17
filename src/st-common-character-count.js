import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let s1Count = {};
  let s2Count = {};
  for(let char of s1) {
    s1Count[char] = !s1Count[char] ? 1 : s1Count[char] + 1;
  }
  for(let char of s2) {
    s2Count[char] = !s2Count[char] ? 1 : s2Count[char] + 1;
  }
  let result = 0;
  for(let key in s1Count) {
    if(s2Count[key]) {
      result += Math.min(s1Count[key], s2Count[key]);
    }
  }
  return result;
}
