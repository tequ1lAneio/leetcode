/**
 * @param {number} n
 * @return {number}
 */

let n
n = 50
n = 100

// dp
// const soupServings = (n) => {
//   n = Math.ceil(n / 25)
//
//   if (n >= 179) {
//     return 1
//   }
//
//   const dp = new Array(n + 1).fill(0).map(_ => new Array(n + 1).fill(0))
//   dp[0][0] = .5
//
//   for (let i = 0; i < n; i++) {
//     dp[0][i + 1] = 1
//   }
//
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       dp[i][j] = (dp[Math.max(0, i - 4)][j] + dp[Math.max(0, i - 3)][Math.max(0, j - 1)] + dp[Math.max(0, i - 2)][Math.max(0, j - 2)] + dp[Math.max(0, i - 1)][Math.max(0, j - 3)]) / 4
//     }
//   }
//
//   return dp[n][n]
// }

// dfs
const soupServings = (n) => {
  n = Math.ceil(n / 25)

  if (n >= 179) {
    return 1
  }

  const memo = new Array(n + 1).fill(0).map(_ => new Array(n + 1).fill(0))

  const dfs = (a, b) => {
    if (a <= 0 && b <= 0) {
      return 0.5
    } else if (a <= 0) {
      return 1
    } else if (b <= 0) {
      return 0
    }

    if (memo[a][b] === 0) {
      memo[a][b] =  (dfs(a - 4, b) + dfs(a - 3, b - 1) + dfs(a - 2, b - 2) + dfs(a - 1, b - 3)) / 4
    }

    return memo[a][b]
  }

  return dfs(n, n)
}

console.log(soupServings(n))
