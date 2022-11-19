/**
 * @param {number[]} nums
 * @return {number}
 */

let nums
nums = [2,1,3]
nums = [2]

const sumSubseqWidths = (nums) => {
  const MOD = 1e9 + 7
  nums.sort((a, b) => a - b)
  let ans = 0
  let x = nums[0]
  let y = 2

  for (let i = 1; i < nums.length; i++) {
    ans = (ans + nums[i] * (y - 1) - x) % MOD
    x = (x * 2 + nums[i]) % MOD
    y = y * 2 % MOD
  }

  return (ans + MOD) % MOD
}

console.log(sumSubseqWidths(nums))
