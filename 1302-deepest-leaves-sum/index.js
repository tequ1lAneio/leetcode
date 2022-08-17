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

let root = []
root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]

// const deepestLeavesSum = function(root) {
//   let deepestLevel = -1
//   let ans = 0
//
//   const dfs = (node, level) => {
//     if (!node) {
//       return
//     }
//
//     if (level > deepestLevel ) {
//       deepestLevel = level
//       ans = node.val
//     } else if (level === deepestLevel) {
//       ans += node.val
//     }
//
//     dfs(node.left, level + 1)
//     dfs(node.right, level + 1)
//   }
//
//   dfs(root, 0)
//
//   return ans
// };

const deepestLeavesSum = (root) => {
  let sum = 0
  const queue = []

  queue.push(root)

  while (queue.length > 0) {
    sum = 0
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      sum += node.val

      if (node.left) {
        queue.push(node.left)
      }

      if (queue[i].right) {
        queue.push(node.right)
      }
    }
  }

  return sum
}

console.log(deepestLeavesSum(root))
