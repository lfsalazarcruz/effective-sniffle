/**
 * 
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map
 * to the same character, but a character may map to itself.
 */

var isIsomorphic = function(s, t) {
  const mapST = {}, mapTS = {}

  for (let i = 0; i < s.length; i++) {
      let char1 = s[i], char2 = t[i]

      if ((char1 in mapST && mapST[char1] !== char2) ||
          (char2 in mapTS && mapTS[char2] !== char1)) {
          return false
      }

      mapST[char1] = char2
      mapTS[char2] = char1
  }

  return true
}