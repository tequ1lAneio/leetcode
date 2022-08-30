/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

let nums, n
nums = [2,5,1,3,4,7], n = 3
nums = [1,2,3,4,4,3,2,1], n = 4
// nums = [1,1,2,2], n = 2

const shuffle = function(nums, n) {
  const ans = new Array(2 * n).fill(0)

  for (let i = 0; i < n; i++) {
    ans[2 * i ] = nums[i]
    ans[2 * i + 1] = nums[n + i]
  }

  return ans
};

console.log(shuffle(nums, n))
