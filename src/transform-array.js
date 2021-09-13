import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  const array = [...arr];
  for(let i = 0; i < array.length; i++) {
    switch(array[i]) {
      case('--discard-next'):
        if(i < array.length - 1) {
          array[i] = '';
          array[i + 1] = '';
        } else {
          array.pop();
        }
        break;
      case('--discard-prev'): 
        if(i > 0) {
          array[i] = '';
          array[i - 1] = '';
        } else {
          array.shift();
          i -= 1;
        }
        break;
      case('--double-next'):
        if(i < array.length - 1) {
          array[i] = array[i + 1];
        } else {
          array.pop();
        }
        break;
      case('--double-prev'): 
        if(i > 0) {
          array[i] = array[i - 1];
        } else {
          array.shift();
          i -= 1;
        }
        break;
    }
  };
  return array.filter(item => item !== '');
}
