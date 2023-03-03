/**
 * Implement HashSet without using any built-in library
 */

class HashSet {
  constructor() {
    this.state = {}
  }

  add(key, val = null) {
    this.state[key] = val
  }

  remove(key) {
    delete this.state[key]
  }

  contains(key) {
    return this.state[key] ? true : false
  }

  isEmpty() {
    return  Object.keys(this.state).length === 0
  }

  size() {
    return Object.keys(this.state).length
  }
}