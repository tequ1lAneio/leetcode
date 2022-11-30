/**
 * @param {string} s
 * @return {number}
 */

let s
s = "0100"
// s = "10"
// s = "1111"

const minOperations = (s) => {
  const n = s.length
  let count = 0

  for (let i = 0; i < n; i++) {
    if ((s[i].charCodeAt() - '0'.charCodeAt()) !== i % 2) {
      count++
    }
  }

  return Math.min(count, n - count)
}

console.log(minOperations(s))
