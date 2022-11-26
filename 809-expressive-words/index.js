/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

let s, words
s = "heeellooo", words = ["hello", "hi", "helo"]

const expressiveWords = function(s, words) {
  let ans = 0

  for (const word of words) {
    if (expand(s, word)) {
      ans++
    }
  }

  return ans
}

const expand = (s, word) => {
  let i = 0
  let j = 0

  while (i < s.length && j < word.length) {
    if (s[i] !== word[j]) {
      return false
    }

    const char = s[i]
    let countI = 0
    while (i < s.length && s[i] === char) {
      countI++
      i++
    }

    let countJ = 0
    while (j < word.length && word[j] === char) {
      countJ++
      j++
    }

    if (countI < countJ) {
      return false
    }

    if (countI !== countJ && countI < 3) {
      return false
    }
  }

  return i === s.length && j === word.length
}

console.log(expressiveWords(s, words))
