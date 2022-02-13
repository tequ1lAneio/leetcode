const array = [10,9,2,5,3,7,101,18]
// const array = [0,1,0,3,2,3]
// const array = [-2,-1]

/**
 * @param {number[]} nums
 * @return {number}
 */

// const lengthOfLIS = function(nums) {
//   const dp = new Array(nums.length).fill(1)
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[j] < nums[i]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1)
//       }
//     }
//   }
//   return Math.max(...dp)
// }

const lengthOfLIS = function(nums) {
  const len = nums.length
  if (len <= 1) {
    return len
  }

  const arr = [nums[0]]
  for (let i = 0; i < len; i++) {
    const lastIdx = arr.length - 1
    const cur = nums[i]

    if (arr[lastIdx] === cur) {
      continue
    } else if (arr[lastIdx] < cur) {
      arr.push(cur)
    } else {
      let left = 0
      let right = lastIdx

      while (left < right) {
        const mid = (left + right) >> 1
        if (arr[mid] < cur) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      arr[left] = nums[i]
    }
  }

  return arr.length
};

console.log(lengthOfLIS(array))
