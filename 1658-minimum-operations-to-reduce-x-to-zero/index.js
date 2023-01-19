const _ = require('lodash');
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

let nums, x
nums = [1,1,4,2,3], x = 5
nums = [5,6,7,8,9], x = 4
nums = [3,2,20,1,1,3], x = 10

const minOperations = (nums, x) => {
  const n = nums.length;
  const sum = _.sum(nums);

  if (sum < x) {
    return -1
  }

  let right = 0
  let lsum = 0
  let rsum = sum
  let ans = n + 1

  for (let left = -1; left < n; ++left) {
    if (left != -1) {
      lsum += nums[left]
    }
    while (right < n && lsum + rsum > x) {
      rsum -= nums[right]
      ++right
    }
    if (lsum + rsum === x) {
      ans = Math.min(ans, (left + 1) + (n - right))
    }
  }

  return ans > n ? -1 : ans
}

console.log(minOperations(nums, x))
