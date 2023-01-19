/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */

words = ["pay","attention","practice","attend"], pref = "at"
words = ["leetcode","win","loops","success"], pref = "code"

const prefixCount = (words, pref) => {
  let ans = 0

  for (const word of words) {
    if (word.startsWith(pref)) {
      ans++
    }
  }

  return ans
}

console.log(prefixCount(words, pref))
