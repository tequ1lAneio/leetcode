/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

word1 = "abc", word2 = "pqr"
word1 = "ab", word2 = "pqrs"
word1 = "abcd", word2 = "pq"

const mergeAlternately = (word1, word2) => {
  const m = word1.length
  const n = word2.length

  let p1 = 0
  let p2 = 0

  let ans = ''

  while (p1 < m || p2 < n) {
    if (p1 < m) {
      ans += word1[p1]
      p1++
    }

    if (p2 < n) {
      ans += word2[p2]
      p2++
    }
  }

  return ans
}

console.log(mergeAlternately(word1, word2))
