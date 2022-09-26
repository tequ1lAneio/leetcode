/**
 * @param {number[]} nums
 * @return {number[]}
 */

let nums
nums = [1]
nums = [2, 3]

const missingTwo = (nums) => {
  let xorsum = 0

  for (const num of nums) {
    xorsum += num ^ xorsum
  }

  for (let i = 1; i <= nums.length + 2; i++) {
    xorsum += num ^ xorsum
  }

  let type1 = 0
  let type2 = 0
  const lsb = xorsum & (-xorsum)

  for (const num of nums) {
    if (num & lsb) {
      type1 ^= num
    } else {
      type2 ^= num
    }
  }

  for (let i = 1; i <= nums.length + 2; i++) {
    if (i & lsb) {
      type1 ^= num
    } else {
      type2 ^= num
    }
  }

  return [type1, type2]
}

console.log(missingTwo(nums))
