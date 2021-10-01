import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const minusOneArray = arr.map(item => item == -1 ? item : 0);
  const sortedArray = arr.filter(item => item == -1 ? false : true).sort((a, b) => a - b);
  let index = 0;
  minusOneArray.forEach((item, i) => {
    if(item == -1) return;
    minusOneArray[i] = sortedArray[index];
    index++;
  })
  return minusOneArray;
}
