/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

let nums, k
nums = [9,1,2,3,9], k = 3
nums = [1,2,3,4,5,6,7], k = 4

const largestSumOfAverages = (nums, k) => {
  const n = nums.length
  const prefix = new Array(n + 1).fill(0)

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i]
  }

  const dp = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    dp[i] = prefix[i] / i
  }

  for (let i = 2; i <= k; i++) {
    for (let j = n; j >= i; j--) {
      for (let x = i - 1; x < j; x++) {
        dp[j] = Math.max(dp[j], dp[x] + (prefix[j] - prefix[x]) / (j - x))
      }
    }
  }

  return dp[n]
}

console.log(largestSumOfAverages(nums, k))
