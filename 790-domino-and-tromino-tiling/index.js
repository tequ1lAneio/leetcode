/**
 * @param {number} n
 * @return {number}
 */

let n
n = 3
n = 1

// dp
const numTilings = (n) => {
  const MOD = 1e9 + 7
  const dp = new Array(n + 1).fill(0).map(_ => new Array(4).fill(0))
  dp[0][1] = 1

  for (let i = 1; i <= n; i++) {
    dp[i][0] = dp[i - 1][1] % MOD
    dp[i][1] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][3]) % MOD
    dp[i][2] = (dp[i - 1][0] + dp[i - 1][3]) % MOD
    dp[i][3] = (dp[i - 1][0] + dp[i - 1][2]) % MOD
  }

  return dp[n][1]
}

console.log(numTilings(n))
