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
 * @return {TreeNode[]}
 */

// const findDuplicateSubtrees = function(root) {
//   const repeat = new Set()
//   const seen = new Map()
//
//   const dfs = (root) => {
//     if (!root) {
//       return ''
//     }
//
//     let str = root.value
//     str += '?'
//     str += dfs(root.left)
//     str += '!'
//     str += '?'
//     str += dfs(root.right)
//     str += '!'
//
//     if (seen.has(str)) {
//       repeat.set(seen.get(str))
//     } else {
//       seen.set(str, root)
//     }
//
//     return str
//   }
//
//   dfs(root)
//
//   return [...repeat]
// };

const findDuplicateSubtrees = (root) => {
  const repeat = new Set()
  const seen = new Map()
  let index = 0

  const dfs = (root) => {
    if (!root) {
      return 0
    }

    const group = [root.val, dfs(root.left), dfs(root.right)]
    const hash = group.toString()

    if (seen.has(hash)) {
      const pair = seen.get(hash)
      repeat.add(pair[0])
      return pair[1]
    } else {
      seen.set(hash, [root, ++index])
      return index
    }
  }

  dfs(root)
  return [...repeat]
}
