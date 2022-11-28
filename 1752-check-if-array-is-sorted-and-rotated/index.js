/**
 * @param {number[]} nums
 * @return {boolean}
 */

let nums
nums = [3,4,5,1,2]
nums = [2,1,3,4]
// nums = [1,2,3]
// nums = [6,10,6]
// nums = [1,1,1]

const check = (nums) => {
  const n = nums.length
  let flag = false

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      if (!flag) {
        flag = true
      } else {
        return false
      }
    }
  }

  return !flag || (flag && nums[n - 1] <= nums[0])
}

console.log(check(nums))
