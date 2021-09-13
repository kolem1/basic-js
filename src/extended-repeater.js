import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let resultArray = [];
  for(let i = 0; i < (options.repeatTimes || 1); i++) {
    let string = String(str);
    let addition = [];
    for(let j = 0; j < (options.additionRepeatTimes || 1); j++) {
      if(options.addition !== null) {
        addition.push(options.addition)
      } else {
        addition.push(String(options.addition))
      }
    }
    string += addition.join(options.additionSeparator || '|');
    resultArray.push(string);
  }
  return resultArray.join(options.separator || '+');
}
