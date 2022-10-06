/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

let nums, k
nums = [4, 3, 2, 3, 5, 2, 1], k = 4
nums = [1,2,3,4], k = 3

const canPartitionKSubsets = (nums, k) => {
  const n = nums.length
  let all = 0

  for (let i = 0; i < n; i++) {
    all += nums[i]
  }

  if (all % k !== 0) {
    return false
  }

  nums.sort((a, b) => a - b)

  const per = all / k
  if (nums[nums.length - 1] > per) {
    return false
  }

  const dp = new Array(1 << n).fill(false)
  const curSum = new Array(1 << n).fill(0)

  dp[0] = true

  for (let i = 0; i < 1 << n; i++) {
    if (!dp[i]) {
      continue
    }

    for (let j = 0; j < n; j++) {
      if (curSum[i] + nums[j] > per) {
        break
      }

      if (((i >> j) & 1) === 0) {
        let next = i | (1 << j)
        if (!dp[next]) {
          curSum[next] = (curSum[i] + nums[j]) % per
          dp[next] = true
        }
      }
    }
  }

  return dp[(1 << n) - 1]
}

console.log(canPartitionKSubsets(nums, k))
