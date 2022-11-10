/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */

let n, mines
n = 5, mines = [[4, 2]]
// n = 1, mines = [[0, 0]]

const orderOfLargestPlusSign = (n, mines) => {
  const dp = new Array(n).fill(0).map(_ => new Array(n).fill(n))
  const banned = new Set()

  for (const vec of mines) {
    banned.add(vec[0] * n + vec[1])
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    let count = 0

    for (let j = 0; j < n; j++) {
      if (banned.has(i * n + j)) {
        count = 0
      } else {
        count++
      }
      dp[i][j] = Math.min(dp[i][j], count)
    }

    count = 0
    for (let j = n - 1; j >= 0; j--) {
      if (banned.has(i * n + j)) {
        count = 0
      } else {
        count++
      }

      dp[i][j] = Math.min(dp[i][j], count)
    }
  }

  for (let i = 0; i < n; i++) {
    let count = 0

    for (let j = 0; j < n; j++) {
      if (banned.has(j * n + i)) {
        count = 0
      } else {
        count++
      }

      dp[j][i] = Math.min(dp[j][i], count)
    }

    count = 0
    for (let j = n - 1; j >= 0; j--) {
      if (banned.has(j * n + i)) {
        count = 0
      } else {
        count++
      }
      dp[j][i] = Math.min(dp[j][i], count)
      ans = Math.max(ans, dp[j][i])
    }
  }

  return ans
}

console.log(orderOfLargestPlusSign(n, mines))
