import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let max = 0;
  let array = n.toString().split('');
  array.forEach((item, i, array) => {
    let newArray = [...array];
    newArray.splice(i, 1);
    max = Math.max(max, Number(newArray.join('')));
  })
  return max;
}
