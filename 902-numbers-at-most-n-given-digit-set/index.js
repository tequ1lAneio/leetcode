/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */

let digits, n
digits = ["1","3","5","7"], n = 333
// digits = ["1","4","9"], n = 1000000000
// digits = ["7"], n = 8

// dp
const atMostNGivenDigitSet = function(digits, n) {
  const s = '' + n
  const m = digits.length
  const k = s.length
  const dp = new Array(k + 1).fill(0).map(_ => new Array(2).fill(0))
  dp[0][1] = 1

  for (let i = 1; i <= k; i++) {
    for (let j = 0; j < m; j++) {
      if (digits[j] === s[i - 1]) {
        dp[i][1] = dp[i - 1][1]
      } else if (digits[j] < s[i - 1]) {
        dp[i][0] += dp[i - 1][1]
      } else {
        break
      }
    }

    if (i > 1) {
      dp[i][0] += m + m * dp[i - 1][0]

    }
  }

  return dp[k][0] + dp[k][1]
}

console.log(atMostNGivenDigitSet(digits, n))
