/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */

let nums, maxOperations
nums = [9], maxOperations = 2
nums = [2,4,8,2], maxOperations = 4
nums = [7,17], maxOperations = 2

const minimumSize = (nums, maxOperations) => {
  let left = 1
  let right = 1e9

  while (left < right) {
    const mid = (left + right) >> 1
    let s = 0

    for (const v of nums) {
      s += Math.floor((v - 1) / mid)
    }

    if (s <= maxOperations) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

console.log(minimumSize(nums, maxOperations))
