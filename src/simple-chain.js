import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  getLength() {
    return this.chain.length;
  },
  addLink(value = ' ') {
    this.chain.push('( ' + value + ' )');
    return this;
  },
  removeLink(position) {
    if(position <= 0 || !Number.isInteger(position) || position >= this.getLength()) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chain.join('~~');
    this.chain = [];
    return chain;
  },
  chain: []
};
