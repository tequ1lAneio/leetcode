/**
 * @param {number[]} nums
 * @return {number[]}
 */

let nums
nums = [1,1,2,2,2,3]
nums = [2,3,1,3,2]
nums = [-1,1,-6,4,5,-6,1,4,1]

const frequencySort = (nums) => {
  const count = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (count.has(nums[i])) {
      count.set(nums[i], count.get(nums[i]) + 1)
    } else {
      count.set(nums[i], 1)
    }
  }

  const ans = [...nums]
  ans.sort((a, b) => {
    const countA = count.get(a)
    const countB = count.get(b)
    return countA === countB ? b - a : countA - countB
  })

  return ans
}
