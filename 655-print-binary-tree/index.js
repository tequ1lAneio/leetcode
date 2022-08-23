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
 * @return {string[][]}
 */

let root
root = [1, 2]
root = [1,2,3,null,4]

// dfs
// const printTree = function(root) {
//   const getHeight = (root) => {
//     let h = 0
//
//     if (root.left) {
//       h = Math.max(h, getHeight(root.left) + 1)
//     }
//
//     if (root.right) {
//       h = Math.max(h, getHeight(root.right) + 1)
//     }
//
//     return h
//   }
//
//   const dfs = (res, root, r, c, height) => {
//     if (!root) {
//       return
//     }
//     res[r][c] = root.val.toString()
//     dfs(res, root.left, r + 1, c - 2 ** (height - r - 1), height)
//     dfs(res, root.right, r + 1, c + 2 ** (height - r - 1), height)
//   }
//
//   const height = getHeight(root)
//   const n = 2 ** (height + 1) - 1
//   const res = new Array(height + 1).fill('').map(item => new Array(n).fill(''))
//   dfs(res, root, 0, Math.floor((n - 1) / 2), height)
//   return res
// };

// bfs
const printTree = () => {
  const getHeight = (root) => {
    const queue = []
    queue.push(root)
    let height = 1

    while (queue.length > 0) {
      let n = queue.length
      height++
      while (n > 0) {
        const cur = queue.shift()
        if (cur.left) {
          queue.push(cur.left)
        }
        if (cur.left) {
          queue.push(cur.right)
        }
        n--
      }
   }
  }

  const height = getHeight(root)
  const n = 2 ** (height + 1) - 1
  const res = new Array(height + 1).fill('').map(item => new Array(n).fill(''))
  const bfs = (root) => {
    const queue = []
    queue.push([root, 0, Math.floor((n - 1) / 2)])

    while (queue.length) {
      let n = queue.length

      while (n > 0) {
        const cur = queue.shift()
        const node = cur[0]
        const r = cur[1]
        const c = cur[2]
        res[r][c] = node.val.toString()

        if (node.left) {
          queue.push([node.left, r + 1, c - (1 << (height - r - 1))])
        }

        if (node.right) {
          queue.push([node.left, r + 1, c + (1 << (height - r - 1))])
        }
        n--
      }
    }
  }
  bfs(root)

  return res
}
