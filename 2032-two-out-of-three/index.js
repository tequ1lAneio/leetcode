/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */

let nums1, nums2, nums3
nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]

const twoOutOfThree = function(nums1, nums2, nums3) {
  const map = new Map()

  for (const i of nums1) {
    map.set(i, 1)
  }

  for (const i of nums2) {
    map.set(i, (map.get(i) || 0) | 2)
  }

  for (const i of nums3) {
    map.set(i, (map.get(i) || 0) | 4)
  }

  const ans = []
  for (const [k, v] of map.entries()) {
    if ((v & (v - 1)) !== 0) {
      ans.push(k)
    }
  }

  return ans
}

console.log(twoOutOfThree(nums1, nums2, nums3))
