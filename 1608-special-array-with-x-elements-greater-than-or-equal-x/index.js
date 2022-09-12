/**
 * @param {number[]} nums
 * @return {number}
 */

let nums
nums = [3,5]
// nums = [0,0]
// nums = [0,4,3,0,4]
// nums = [3,6,7,7,0]

const specialArray = (nums) => {
  const n = nums.length
  nums.sort((a, b) => b - a)

  for (let i = 1; i <= n; i++) {
    if (nums[i - 1] >= i && (i === n || nums[i] < i)) {
      return i
    }
  }

  return -1
}

console.log(specialArray(nums))
