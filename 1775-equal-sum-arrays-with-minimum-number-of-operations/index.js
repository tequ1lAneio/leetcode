/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

let nums1, nums2
nums1 = [1,2,3,4,5,6], nums2 = [1,1,2,2,2,2]
nums1 = [1,1,1,1,1,1,1], nums2 = [6]
nums1 = [6,6], nums2 = [1]

const minOperations = (nums1, nums2) => {
  const n = nums1.length
  const m = nums2.length

  if (6 * n < m || 6 * m < n) {
    return -1
  }

  const count1 = new Array(7).fill(0)
  const count2 = new Array(7).fill(0)
  let diff = 0

  for (const num of nums1) {
    count1[num]++
    diff += num
  }

  for (const num of nums2) {
    count2[num]++
    diff -= num
  }

  if (diff === 0) {
    return 0
  }

  if (diff > 0) {
    return helper(count2, count1, diff)
  }

  return helper(count1, count2, -diff)
}

const helper = (h1, h2, diff) => {
  const h = new Array(7).fill(0)

  for (let i = 1; i < 7; i++) {
    h[6 - i] += h1[i]
    h[i - 1] += h2[i]
  }

  let res = 0
  for (let i = 5; i > 0 && diff > 0; i--) {
    let t = Math.min(Math.floor((diff + i - 1) / i), h[i])
    res += t
    diff -= t * i
  }

  return res
}

console.log(minOperations(nums1, nums2))
