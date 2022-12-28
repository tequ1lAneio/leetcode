/**
 * @param {string} s
 * @return {number}
 */

let s
s = "XXX"
s = "XXOX"
// s = "OOOO"

const minimumMoves = (s) => {
  let ans = 0
  let i = 0

  while (i < s.length) {
    if (s[i] === 'X') {
      i += 3
      ans++
    } else {
      i++
    }
  }

  return ans
}

console.log(minimumMoves(s))
