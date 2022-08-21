/**
 * @param {number[]} nums
 * @return {number}
 */

let nums
nums = [2,2,1,1,5,3,3,5]
nums = [1,1,1,2,2,2,3,3,3,4,4,4,5]
nums = [100000, 100000]

// const maxEqualFreq = function(nums) {
//   const n = nums.length
//   let count = new Array(100001).fill(0)
//   let freq = new Array(100001).fill(0)
//
//   for (let i = 0; i < nums.length; i++) {
//     count[nums[i]]++
//     freq[count[nums[i]]]++
//   }
//
//   for (let i = nums.length - 1; i > 0; i--) {
//     if (count[nums[i]] * freq[count[nums[i]]] === i ) {
//       return i + 1
//     }
//
//     freq[count[nums[i]]]--
//     count[nums[i]]--
//
//     if (count[nums[i - 1]] * freq[count[nums[i - 1]]] === i) {
//       return i + 1
//     }
//   }
//
//   return 1
// };

const maxEqualFreq = function(nums) {
  const n = nums.length
  const count = new Map()
  const freq = new Map()

  for (let i = 0; i < n; i++) {
    if (!count.has(nums[i])) {
      count.set(nums[i], 0)
    }
    count.set(nums[i], count.get(nums[i]) + 1)

    if (!freq.has(count.get(nums[i]))) {
      freq.set(count.get(nums[i]), 0)
    }
    freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) + 1)
  }

  for (let i = n - 1; i > 0; i--) {
    if (count.get(nums[i]) * freq.get(count.get(nums[i])) === i) {
      return i + 1
    }

    freq.set(count.get(nums[i]), freq.get(count.get(nums[i])) - 1)
    count.set(nums[i], count.get(nums[i]) - 1)

    if (count.get(nums[i - 1]) * freq.get(count.get(nums[i - 1])) === i) {
      return i + 1
    }
  }

  return 1
}

console.log(maxEqualFreq(nums))

