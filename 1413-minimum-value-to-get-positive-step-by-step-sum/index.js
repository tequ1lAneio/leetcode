/**
 * @param {number[]} nums
 * @return {number}
 */

// const input = [-3, 2, -3, 4, 2]
// const input = [2, 3, 4, 5, 6]
// const input = [-3,6,2,5,8,6]
const input = [23,-1,16,1,12,28,-2,13,8,30,25,-20,12,-4,-7,-17,15,-6,-23,30,-3]

// const minStartValue = function(nums) {
//   let sum = 0
//
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
//   }
//
//   let startValue = 1 - sum[0] > 0 ? 1 - sum[0] : 1
//
//   let current = startValue
//
//   for (let i = 0; i < nums.length; i++) {
//     current += nums[i]
//     if (current < 1) {
//       const distance = 1 - current
//       current += distance
//       startValue += distance
//     }
//   }
//
//   return startValue
// };

// greedy
// const minStartValue = (nums) => {
//   let minSum = 0, sum = 0
//
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
//     minSum = Math.min(sum, minSum)
//   }
//
//   return 1 - minSum
// }

// dichotomy
const minStartValue = (nums) => {
  const min = Math.min(...nums)
  if (min > 0) {
    return 1
  }

  const isValid = (startValue) => {
    let current = startValue
    for (let i = 0; i < nums.length; i++) {
      current += nums[i]
      if (current < 1) {
        return false
      }
    }
    return true
  }

  let left = 1
  let right = -min * nums.length + 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (isValid(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

console.log(minStartValue(input))
