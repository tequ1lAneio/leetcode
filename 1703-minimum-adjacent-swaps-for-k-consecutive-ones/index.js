/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

let nums, k
nums = [1,0,0,1,0,1], k = 2
// nums = [1,0,0,0,0,0,1,1], k = 3
// nums = [1,1,0,1], k = 2

const minMoves = (nums, k) => {
  const g = []
  const preSum = []
  preSum.push(0)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      g.push(i - g.length)
      preSum.push(preSum[preSum.length - 1] + g[g.length - 1])
    }
  }

  let m = g.length
  let ans = Number.MAX_SAFE_INTEGER

  for (let i = 0; i <= m - k; i++) {
    let mid = i + Math.floor(k / 2)
    let r = g[mid]
    ans = Math.min(ans, (1 - k % 2) * r + (preSum[i + k] - preSum[mid + 1]) - (preSum[mid] - preSum[i]))
  }

  return ans
}

console.log(minMoves(nums, k))
