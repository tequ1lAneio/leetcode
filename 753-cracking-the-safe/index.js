/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

let n, k
n = 1, k = 2
n = 2, k = 2

const crackSafe = (n, k) => {
  const highest = Math.pow(10, n - 1)
  let ans = ''
  const seen = new Set()

  const dfs = (node) => {
    for (let x = 0; x < k; x++) {
      let neighbor = node * 10 + x

      if (!seen.has(neighbor)) {
        seen.add(neighbor)
        dfs(neighbor % highest)
        ans += x
      }
    }
  }

  dfs(0)

  for (let i = 1; i < n; i++) {
    ans += '0'
  }

  return ans
}

console.log(crackSafe(n, k))
