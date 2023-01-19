/**
 * @param {number[]} nums
 * @return {number}
 */

let nums
nums = [42,11,1,97]
nums = [13,10,35,24,76]

const countNicePairs = (nums) => {
  const MOD = 1e9 + 7
  let ans = 0
  const map = new Map()

  for (const i of nums) {
    let temp = i
    let j = 0

    while (temp > 0) {
      j = j * 10 + temp % 10
      temp = Math.floor(temp / 10)
    }

    ans = (ans + (map.get(i - j) || 0)) % MOD
    map.set(i - j, (map.get(i - j) || 0) + 1)
  }

  return ans
}

console.log(countNicePairs(nums))
