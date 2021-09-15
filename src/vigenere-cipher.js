import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(bool = true) {
    this.reverse = !bool;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  encrypt(message, key) {
    if(message == undefined || key == undefined) throw new Error('Incorrect arguments!');
    let encryptArray = [];
    for(let i = 0, j = 0; i < message.length; i++) {
      if(this.alphabet.includes(message[i].toUpperCase())) {
        encryptArray[i] = key[j].toUpperCase();
        j++;
        if(j == key.length) {
          j = 0;
        }
      }
    }
    let encriptedMessage = message.toUpperCase().split('').map((item, i) => {
      if(this.alphabet.indexOf(item) != -1) {
        let position = this.alphabet.indexOf(item);
        let shiftPosition = this.alphabet.indexOf(encryptArray[i]);
        let newPosition = (position + shiftPosition) % this.alphabet.length;
        return this.alphabet[newPosition];
      }
      return item;
    }).join('');
    if(this.reverse) {
      return encriptedMessage.split('').reverse().join('')
    }
    return encriptedMessage;
  }
  decrypt(encryptedMessage, key) {
    if(encryptedMessage == undefined || key == undefined) throw new Error('Incorrect arguments!');
    let encryptArray = [];
    for(let i = 0, j = 0; i < encryptedMessage.length; i++) {
      if(this.alphabet.includes(encryptedMessage[i].toUpperCase())) {
        encryptArray[i] = key[j].toUpperCase();
        j++;
        if(j == key.length) {
          j = 0;
        }
      }
    }
    let message = encryptedMessage.toUpperCase().split('').map((item, i) => {
      if(this.alphabet.indexOf(item) != -1) {
        let position = this.alphabet.indexOf(item);
        let shiftPosition = this.alphabet.indexOf(encryptArray[i]);
        let newPosition = (position - shiftPosition + this.alphabet.length) % this.alphabet.length;
        return this.alphabet[newPosition];
      }
      return item;
    }).join('');
    if(this.reverse) {
      return message.split('').reverse().join('')
    }
    return message;
  }
  
}
