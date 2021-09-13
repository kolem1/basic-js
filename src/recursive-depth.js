import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    if(!arr.filter(item => Array.isArray(item)).length) return 1;
    let currentDepth = 1;
    let maxDepth = 1;
    arr.forEach(element => {
      if(Array.isArray(element)) {
        currentDepth += this.calculateDepth(element);
        maxDepth = Math.max(maxDepth, currentDepth);
        currentDepth = 1;
      }
    });
    return maxDepth;
  }
}
