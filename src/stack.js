const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.arr = []
  }
  push(element) {
   let val = this.arr.push(element)
   return val
  }

  pop() {
   let val = this.arr.pop()
   return val
  }

  peek() {
    let val = this.arr.at(-1)
    return val
  }
}

module.exports = {
  Stack
};
