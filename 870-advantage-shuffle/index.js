/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let nums1, nums2
nums1 = [2,7,11,15], nums2 = [1,10,4,11]
nums1 = [12,24,8,32], nums2 = [13,25,32,11]


const advantageCount = (nums1, nums2) => {
  const n = nums1.length
  const idx1 = new Array(n).fill(0)
  const idx2 = new Array(n).fill(0)

  for (let i = 0; i < n; i++) {
    idx1[i] = i
    idx2[i] = i
  }

  idx1.sort((a, b) => nums1[a] - nums1[b])
  idx2.sort((a, b) => nums2[a] - nums2[b])

  console.log(idx1, idx2)

  const ans = new Array(n).fill(0)
  let left = 0
  let right = n - 1

  for (let i = 0; i < n; i++) {
    if (nums1[idx1[i]] > nums2[idx2[left]]) {
      ans[idx2[left]] = nums1[idx1[i]]
      left++
    } else {
      ans[idx2[right]] = nums1[idx1[i]]
      right--
    }
  }

  return ans
}

console.log(advantageCount(nums1, nums2))
