/**
 * @param {number[]} nums
 * @return {number}
 */

let nums
nums = [1,3,5,2,4,8,2,2]
nums = [3]

const minMaxGame = (nums) => {
  let n = nums.length

  while (n > 1) {
    const newNums = new Array(Math.floor(n / 2)).fill(0)

    for (let i = 0; i < newNums.length; i++) {
      if (i % 2 === 0) {
        newNums[i] = Math.min(nums[2 * i], nums[2* i + 1])
      } else {
        newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1])
      }
    }

    nums = newNums
    n = Math.floor(n / 2)
  }

  return nums[0]
}

console.log(minMaxGame(nums))
