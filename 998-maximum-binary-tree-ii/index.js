/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

let root, val
root = [4,1,3,null,null,2], val = 5
root = [5,2,4,null,1], val = 3
root = [5,2,3,null,1], val = 4

// const insertIntoMaxTree = function(root, val) {
//   let parent = null
//   let current = root
//
//   while (current) {
//     if (current.val < val) {
//       if (!parent) {
//         return new TreeNode(val, current, null)
//       }
//
//       const node = new TreeNode(val, null, current)
//       parent.right = node
//     } else {
//       parent = current
//       current = current.right
//     }
//   }
//
//   const node = new TreeNode(val, null, null)
//   parent.right = node
//   return root
// };

const insertIntoMaxTree = (root, val) => {
  if (!root) {
    return new TreeNode(val)
  }

  if (val > root.val) {
    return new TreeNode(val, root)
  }

  root.right = insertIntoMaxTree(root.right, val)
  return root
}
