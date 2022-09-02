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
 * @return {number}
 */

const longestUnivaluePath = (root) => {
  let ans = 0
  const dfs = (root) => {
    if (!root) {
      return 0
    }

    const left = dfs(root.left)
    const right = dfs(root.right)

    let length = 0
    let current = 0

    if (root.left && root.left.val === root.val) {
      length = left + 1
      current = left + 1
    }

    if (root.right && root.right.val === root.val) {
      length = Math.max(length, right + 1)
      current += (right + 1)
    }

    ans = Math.max(ans, current)
    return length
  }

  dfs(root)
  return ans
};
