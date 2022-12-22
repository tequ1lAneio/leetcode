/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

let a, b, c
a = 2, b = 4, c = 6
a = 4, b = 4, c = 6
a = 1, b = 8, c = 8

const maximumScore = (a, b, c) => {
  const sum = a + b + c
  const max = Math.max(Math.max(a, b), c)
  return Math.min(sum - max, Math.floor((sum / 2)))
}

console.log(maximumScore(a, b, c))
