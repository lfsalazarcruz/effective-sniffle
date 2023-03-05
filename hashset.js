/**
 * Implement HashSet without using any built-in library
 */

class HashSet {
  constructor() {
    this.state = {}
  }

  add(item) {
    if(!(item in this.state)) {
      this.state[item] = true
    }
    return false
  }

  remove(item) {
    if(item in this.state) {
      delete this.state[item]
      return true
    }
    return false
  }

  contains(item) {
    return this.state[item] ? true : false
  }

  isEmpty() {
    return  Object.keys(this.state).length === 0
  }

  size() {
    return Object.keys(this.state).length
  }
}