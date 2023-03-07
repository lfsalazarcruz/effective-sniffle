/**
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.} strs  
 */

var groupAnagrams = function(strs) {
  const hash = {}
  const res = []

  for (let word in strs) {
      const sorted = strs[word].split("").sort().join("")
      if (sorted in hash) {
          hash[sorted].push(strs[word])
      } else {
          hash[sorted] = [strs[word]]
      }
  }

  for (let arr in hash) {
      res.push(hash[arr])
  }

  return res
}
