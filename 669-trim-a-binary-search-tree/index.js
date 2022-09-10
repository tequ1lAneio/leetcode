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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */

// const trimBST = (root, low, high) => {
//   if (!root) {
//     return null
//   }
//
//   if (root.val < low) {
//     return trimBST(root.right, low, high)
//   }
//
//   if (root.val > high) {
//     return trimBST(root.left, low, high)
//   }
//
//   root.left = trimBST(root.left, low, high)
//   root.right = trimBST(root.right, low, high)
//
//   return root
// }


const trimBST = (root, low, high) => {
  while (root && (root.val < low || root.val > high)) {
    if (root.val < low) {
      root = root.right
    } else {
      root = root.left
    }
  }

  if (!root) {
    return null
  }

  for (let node = root; node.left;) {
    if (node.left.val < low) {
      node.left = node.left.right
    } else {
      node = node.left
    }
  }

  for (let node = root; node.left;) {
    if (node.right.val > high) {
      node.right = node.right.left
    } else {
      node = node.right
    }
  }

  return root
}
