/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

let nums, left, right
nums = [2,1,4,3], left = 2, right = 3
nums = [2,9,2,5,6], left = 2, right = 8
nums = [73,55,36,5,55,14,9,7,72,52], left = 32, right = 69

// const numSubarrayBoundedMax = (nums, left, right) => {
//   let ans = 0
//   const n = nums.length
//
//   let i = 0
//   while (i < n) {
//     if (nums[i] <= right) {
//       let j = i
//       let count = 0
//
//       const cur = []
//       while (j < n && nums[j] <= right) {
//         cur.push(nums[j])
//         if (isValid(cur, left, right)) {
//           count++
//         }
//         j++
//       }
//
//       ans += count
//     }
//
//     i++
//   }
//
//   return ans
// }
//
// const isValid = (arr, left, right) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= left && arr[i] <= right) {
//       return true
//     }
//   }
// }

// const numSubarrayBoundedMax = (nums, left, right) => {
//   let ans = 0
//   let last1 = -1
//   let last2 = -1
//
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= left && nums[i] <= right) {
//       last1 = i
//     } else if (nums[i] > right) {
//       last2 = i
//       last1 = -1
//     }
//
//     if (last1 > -1) {
//       ans += last1 - last2
//     }
//   }
//
//   return ans
// }

const numSubarrayBoundedMax = (nums, left, right) => {
  const getCount = (lower) => {
    let cur = 0
    let res = 0

    for (const num of nums) {
      cur = num <= lower ? cur + 1 : 0
      res += cur
    }

    return res
  }

  return getCount(right) - getCount(left - 1)
}

console.log(numSubarrayBoundedMax(nums, left, right))
