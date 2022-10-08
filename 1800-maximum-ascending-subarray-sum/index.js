/**
 * @param {number[]} nums
 * @return {number}
 */

let nums
nums = [10,20,30,5,10,50]
nums = [10,20,30,40,50]
nums = [12,17,15,13,10,11,12]
nums = [100,10,1]

// const maxAscendingSum = (nums) => {
//   let ans = 0
//   let cur = 0
//
//   for (let i = 1; i < nums; i++) {
//     if (nums[i] > nums[i - 1]) {
//       cur += nums[i]
//     } else {
//       cur = nums[i]
//     }
//
//     ans = Math.max(ans, cur)
//   }
//
//   return ans
// }

// dp
const maxAscendingSum = (nums) => {
  const n = nums.length
  let ans = 0
  let l = 0

  while (l < n) {
    let cur = nums[++l]

    while (l < n && nums[l] > nums[l - 1]) {
      cur += nums[++l]
    }

    ans = Math.max(ans, cur)
  }

  return ans
}
