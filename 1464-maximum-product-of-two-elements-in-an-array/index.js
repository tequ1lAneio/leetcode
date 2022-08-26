/**
 * @param {number[]} nums
 * @return {number}
 */

let nums
nums = [3,4,5,2]
nums = [1,5,4,5]
nums = [3,7]
nums = [2,2,1,8,1,5,4,5,2,10,3,6,5,2,3]

// const maxProduct = (nums) => {
//   nums.sort((a, b) => b - a)
//   return (nums[0] - 1) * (nums[1] - 1)
// }


const maxProduct = (nums) => {
  let a = nums[0] // max
  let b = nums[1]

  if (a < b) {
    [a, b] = [b, a]
  }

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] > a) {
      b = a
      a = nums[i]
    } else if (nums[i] > b) {
      b = nums[i]
    }
  }

  return (a - 1) * (b - 1)
}

console.log(maxProduct(nums))
