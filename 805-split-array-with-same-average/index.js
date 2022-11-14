/**
 * @param {number[]} nums
 * @return {boolean}
 */

let nums
nums = [1,2,3,4,5,6,7,8]
nums = [3,1]

// const splitArraySameAverage = (nums) => {
//   const n = nums.length
//   const m = Math.floor(n / 2)
//
//   if (nums.length <= 1) {
//     return false
//   }
//
//   let sum = 0
//
//   for (const num of nums) {
//     sum += num
//   }
//
//   for (let i = 0; i < n; i++) {
//     nums[i] = nums[i] * n - sum
//   }
//
//   const left = new Set()
//   for (let i = 1; i < (1 << m); i++) {
//     let tot = 0
//
//     for (let j = 0; j < m; j++) {
//       if ((i & (1 << j)) !== 0) {
//         tot += nums[j]
//       }
//     }
//
//     if (tot === 0) {
//       return true
//     }
//
//     left.add(tot)
//   }
//
//   let rsum = 0
//   for (let i = m; i < n; i++) {
//     rsum += nums[i]
//   }
//
//   for (let i = 1; i < (1 << (n - m)); i++) {
//     let tot = 0
//
//     for (let j = m; j < n; j++) {
//       if ((i & 1 << (j - m)) !== 0) {
//         tot += nums[j]
//       }
//     }
//
//     if (tot === 0 || (rsum !== tot && left.has(-tot))) {
//       return true
//     }
//   }
//
//   return false
// }

// dp
const splitArraySameAverage = (nums) => {
  const n = nums.length
  const m = Math.floor(n / 2)

  if (n <= 1) {
    return false
  }

  let sum = 0
  for (const num of nums) {
    sum += num
  }

  let isPossible = false

  for (let i = 1; i <= m; i++) {
    if (sum * i % n === 0) {
      isPossible = true
      break
    }
  }

  if (!isPossible) {
    return false
  }

  const dp = new Array(m + 1).fill(0).map(_ => new Set())
  dp[0].add(0)

  for (const num of nums) {
    for (let i = m; i >= 1; i--) {
      for (const x of dp[i - 1]) {
        let cur = x + num

        if (cur * n === sum * i) {
          return true
        }

        dp[i].add(cur)
      }
    }
  }

  return false
}

console.log(splitArraySameAverage(nums))
