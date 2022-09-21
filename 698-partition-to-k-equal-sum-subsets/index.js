/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

let nums, k
nums = [4, 3, 2, 3, 5, 2, 1], k = 4
// nums = [1,2,3,4], k = 3

var canPartitionKSubsets = function(nums, k) {
  const dfs = (s, p) => {
    if (s === 0) {
      return true;
    }
    if (!dp[s]) {
      return dp[s];
    }
    dp[s] = false;
    for (let i = 0; i < n; i++) {
      if (nums[i] + p > per) {
        break;
      }
      if (((s >> i) & 1) != 0) {
        if (dfs(s ^ (1 << i), (p + nums[i]) % per)) {
          return true;
        }
      }
    }
    return false;
  };
  // const all = _.sum(nums);
  const all = nums.reduce((cur, next) => cur + next, 0)
  if (all % k !== 0) {
    return false;
  }
  per = all / k;
  nums.sort((a, b) => a - b);
  n = nums.length;
  if (nums[n - 1] > per) {
    return false;
  }
  const dp = new Array(1 << n).fill(true);
  return dfs((1 << n) - 1, 0);
}

console.log(canPartitionKSubsets(nums, k))
