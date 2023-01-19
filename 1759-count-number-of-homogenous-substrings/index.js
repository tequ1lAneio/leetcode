/**
 * @param {string} s
 * @return {number}
 */

let s
s = "abbcccaa"
// s = "xy"
// s = "zzzzz"

const countHomogenous = function(s) {
  const MOD = 1e9 + 7
  let ans = 0
  let prev = s[0]
  let count = 0

  for (const char of s) {
    if (prev === char) {
      count++
    } else {
      ans += (count + 1) * count / 2
      count = 1
      prev = char
    }
  }

  ans += (count + 1) * count / 2

  return ans % MOD
}

console.log(countHomogenous(s))
