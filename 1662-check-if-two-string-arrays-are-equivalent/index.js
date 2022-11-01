/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

let word1, word2
word1 = ["ab", "c"], word2 = ["a", "bc"]
word1 = ["a", "cb"], word2 = ["ab", "c"]
// word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
//
// const arrayStringsAreEqual = (word1, word2) => {
//   const concat = (w) => {
//     let res = ''
//     for (const s of w) {
//       res += s
//     }
//     return res
//   }
//
//   return concat(word1) === concat(word2)
// }


const arrayStringsAreEqual = (word1, word2) => {
  let p1 = 0
  let p2 = 0
  let i = 0
  let j = 0

  while (p1 < word1.length && p2 < word2.length) {
    if (word1[p1][i] !== word2[p2][j]) {
      return false
    }

    i++
    if (i === word1[p1].length) {
      i = 0
      p1++
    }

    j++
    if (j === word2[p2].length) {
      j = 0
      p2++
    }
  }

  return p1 === word1.length && p2 === word2.length
}

console.log(arrayStringsAreEqual(word1, word2))
