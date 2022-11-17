/**
 * @param {number[]} nums
 * @return {boolean}
 */

let nums
nums = [1,0,2]
// nums = [1,2,0]
// nums = [3,2,1]

// const isIdealPermutation = (nums) => {
//   const n = nums.length
//   let min = nums[n - 1]
//
//   for (let i = n - 3; i >= 0; i--) {
//     if (nums[i] > min) {
//       return false
//     }
//
//     min = Math.min(nums[i + 1], min)
//   }
//
//   return true
// }

const isIdealPermutation = nums => {
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(i - nums[i]) > 1) {
      return false
    }
  }

  return true
}

console.log(isIdealPermutation(nums))
