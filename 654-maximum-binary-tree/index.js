/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

let nums
nums = [3,2,1,6,0,5]
nums = [3,2,1]

// const constructMaximumBinaryTree = function(nums) {
//   const construct = (nums, left, right) => {
//     if (left > right) {
//       return null
//     }
//
//     let maxIndex = left
//     for (let i = left + 1; i < nums.length; i++) {
//       if (nums[i] > nums[maxIndex]) {
//         maxIndex = i
//       }
//     }
//
//     const node = new TreeNode(nums[maxIndex])
//     node.left = construct(nums, left, maxIndex - 1)
//     node.right = construct(nums, maxIndex + 1, right)
//
//     return node
//   }
//
//   construct(nums, 0, nums.length - 1)
// };

const constructMaximumBinaryTree = (nums) => {
  const
}
