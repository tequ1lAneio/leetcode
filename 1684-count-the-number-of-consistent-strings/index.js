/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */

let allowed, words
allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]

const countConsistentStrings = (allowed, words) => {
  let mask = 0

  for (const char of allowed) {
    mask |= 1 << (char.charCodeAt() - 'a'.charCodeAt())
  }

  let ans = 0

  for (const word of words) {
    let mask1 = 0

    for (const char of word) {
      mask1 |= 1 << (char.charCodeAt() - 'a'.charCodeAt())
    }

    ans += (mask | mask1) === mask
  }

  return ans
}

console.log(countConsistentStrings(allowed, words))
