/**
 * Design a Queue DS with the follwing operations:
 * 
 * push(x) -- Push element x to the back of queue.
 * pop() -- Removes the element from in front of queue.
 * peek() -- Get the front element.
 * empty() -- Return whether the queue is empty.
 */

class Queue {
  constructor() {
    this.queue = []
  }

  push(item) {
    this.queue.push(item)
  }

  pop() {
    if (this.queue.length) {
      const popped = this.queue.shift()
      return popped
    }
  }

  peek() {
    return this.queue.length ? this.queue[0] : -1
  }

  isEmpty() {
    return this.queue.length === 0
  }
}
