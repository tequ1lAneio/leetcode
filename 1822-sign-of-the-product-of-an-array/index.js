/**
 * @param {number[]} nums
 * @return {number}
 */

let nums
nums = [-1,-2,-3,-4,3,2,1]
// nums = [1,5,0,2,-3]
// nums = [-1,1,-1,1,-1]

const arraySign = function(nums) {
  let ans = 1

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0
    } else if (nums[i] < 0) {
      ans = -ans
    }
  }

  return ans
}

console.log(arraySign(nums))


