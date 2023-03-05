/**
 * Implement a HashMap without any built-in libraries.
 * Your implementation should include these three functions: 
 * put(key, value) : Insert a (key, value) pair into the HashMap or If the value already exists, update the value.
 * get(key): Returns the value to which the specified key is mapped, or -1 if  no mapping for the key.
 * remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.
 */

class HashMap {
  constructor() {
    this.hashmap = {}
  }

  put(key, val) {
    this.hashmap[key] = val
  }

  get(key) {
    if(key in this.hashmap) {
      return this.hashmap[key]
    }
    return -1
  }

  remove(key) {
    if(key in this.hashmap) {
      delete this.hashmap[key]
    }
  }
}
