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
 * @return {boolean}
 */

const isBalanced = function(root) {
  if (!root) {
    return true
  }

  if (!isBalanced(root.left) || !isBalanced(root.right)) {
    return false
  }

  return Math.abs(depth(root.left) - depth(root.right)) <= 1
};

const depth = function(node) {
  if (!node) {
    return 0
  }

  return Math.max(depth(node.left), depth(node.right)) + 1
}
