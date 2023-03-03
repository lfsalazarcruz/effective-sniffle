/**
 * Design a stack that supports push, pop, top, and retrieving
 * the minimum element in constant time.
 */


class MinStack {
  constructor() {
    this.stack = []
  }

  push(item) {
    this.stack.push(item)
  }

  pop() {
    if (this.stack.length) this.stack.pop()
  }

  // Also called peek
  top() {
    return this.stack[this.stack.length - 1]
  }

  isEmpty() {
    return this.stack.length === 0
  }

  getMin() {
    let current = Number.MAX_VALUE
    for (let i = 0; i < this.stack.length; i++) {
      if (this.stack[i] < current) {
        current = this.stack[i]
      }
    }
    return current
  }
}
