const { initTree } = require('../000-tools/tree')
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

let root
root = [1,3,2,5,3,null,9]
root = [1,3,2,5,null,null,9,6,null,7]
root = [1,3,2,5]


// const widthOfBinaryTree = (root) => {
//   let ans = 1n
//
//   const bfs = (root) => {
//     const queue = []
//     queue.push([root, 0n])
//
//     while (queue.length) {
//       const n = queue.length
//
//       const currentWidth = queue[queue.length - 1][1] - queue[0][1] + 1n
//       if (currentWidth > ans) {
//         ans = currentWidth
//       }
//
//       for (let i = 0; i < n; i++) {
//         const t = queue.shift()
//         const [node, index] = t
//
//         if (node.left) {
//           queue.push([node.left, index * 2n])
//         }
//         if (node.right) {
//           queue.push([node.right, index * 2n + 1n])
//         }
//       }
//     }
//   }
//
//   bfs(root)
//   return ans
// }

const widthOfBinaryTree = (root) => {
  const min = new Map()
  const dfs = (root, level, index) => {
    if (!root) {
      return
    }

    min.set(level, index)

    const children = Math.max(dfs(root.left, level + 1n, index * 2n), dfs(root.right, level + 1n, index * 2n + 1n))
    return Math.max(children, index - min.get(level) + 1n)
  }

  return dfs(root, 1n, 1n)
}

console.log(widthOfBinaryTree(root))
