/*
* This program Solves the tower of hanoi.
*
* @author  Felipe Garcia Affonso
* @version 1.0
* @since   2021-12-08
*/

class MrCoxallStack {
  // this is a stack class.
  private stack: number[] = []

  push (pushValue: number) {
    // this method adds a value to the stack.
    this.stack.push(pushValue)
  }

  showStack () {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i])
    }
  }
}

const aStack = new MrCoxallStack()

console.log('First stack:')
aStack.showStack()

console.log('Add 10:')
aStack.push(10)
aStack.showStack()

console.log('Add 27:')
aStack.push(27)
aStack.showStack()

console.log('\nDone.')
