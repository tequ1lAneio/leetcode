/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

let nums1, nums2
nums1 = [1,3,5,4], nums2 = [1,2,3,7]
nums1 = [0,3,5,8,9], nums2 = [2,1,4,6,9]

const minSwap = function(nums1, nums2) {
  const n = nums1.length
  let dp0 = 0
  let dp1 = 1

  for (let i = 1; i < n; i++) {
    let a = dp0
    let b = dp1

    dp0 = dp1 = n

    if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
      dp0 = a
      dp1 = b + 1
    }

    if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
      dp0 = Math.min(dp0, b)
      dp1 = Math.min(dp1, a + 1)
    }
  }

  return Math.min(dp0, dp1)
}

console.log(minSwap(nums1, nums2))
