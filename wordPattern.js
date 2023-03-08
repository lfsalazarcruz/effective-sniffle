/**
 * Given a pattern and a string s, find if s follows the same pattern.
 * Here follow means a full match, such that there is a bijection between a letter in pattern
 * and a non-empty word in s. 
 */

var wordPattern = function(pattern, s) {
  const words = s.split(" ")
  const charToWord = {}, wordToChar = {}

  if (words.length !== pattern.length) return false

  for (let i = 0; i < pattern.length; i++) {
      let char = pattern[i], word = words[i]

      if ((charToWord.hasOwnProperty(char) && charToWord[char] != word) ||
          (wordToChar.hasOwnProperty(word) && wordToChar[word] != char)) {
          return false
      }

      charToWord[char] = word
      wordToChar[word] = char
  }

  return true
}
