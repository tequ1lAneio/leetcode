/**
 * @param {number[]} nums
 * @return {number}
 */

let nums
nums = [5,0,3,8,6]
// nums = [1,1,1,0,6,12]

// const partitionDisjoint = (nums) => {
//   const n = nums.length
//   const minRight = new Array(n).fill(0)
//   minRight[n - 1] = nums[n - 1]
//
//   for (let i = n - 2; i >= 0; i--) {
//     minRight[i] = Math.min(nums[i], minRight[i + 1])
//   }
//
//   let maxLeft = 0
//   for (let i = 0; i < n - 1; i++) {
//     maxLeft = Math.max(maxLeft, nums[i])
//
//     if (maxLeft <= minRight[i + 1]) {
//       return i + 1
//     }
//   }
//
//   return n - 1
// }


const partitionDisjoint = (nums) => {
  let left = 0
  let leftMax = nums[0]
  let max = nums[0]

  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max)
    if (nums[i] < leftMax) {
      left = i
      leftMax = max
    }
  }

  return left + 1
}

console.log(partitionDisjoint(nums))
