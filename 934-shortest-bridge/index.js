/**
 * @param {number[][]} grid
 * @return {number}
 */

let grid
grid = [
  [0,1],
  [1,0]
]
// grid = [
//   [0,1,0],
//   [0,0,0],
//   [0,0,1]
// ]
// grid = [
//   [1,1,1,1,1],
//   [1,0,0,0,1],
//   [1,0,1,0,1],
//   [1,0,0,0,1],
//   [1,1,1,1,1]
// ]

// bfs
// const shortestBridge = function(grid) {
//   const pos = [0, -1, 0, 1, 0]
//   const n = grid.length
//   const islands = []
//   const queue = []
//
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] === 1) {
//         queue.push([i, j])
//         grid[i][j] = -1
//
//         while (queue.length > 0) {
//           const cell = queue.shift()
//           const [x, y] = cell
//           islands.push(cell)
//
//           for (let k = 0; k < 4; k++) {
//             let x1 = x + pos[k]
//             let y1 = y + pos[k + 1]
//             if (x1 >= 0 && y1 >= 0 && x1 < n && y1 < n && grid[x1][y1] === 1) {
//               queue.push([x1, y1])
//               grid[x1][y1] = -1
//             }
//           }
//         }
//
//         for (const cell of islands) {
//           queue.push(cell)
//         }
//
//         let ans = 0
//
//         while (queue.length > 0) {
//           const len = queue.length
//
//           for (let k = 0; k < len; k++) {
//             const cell = queue.shift()
//             const [x, y] = cell
//
//             for (let d = 0; d < 4; d++) {
//               let x1 = x + pos[d]
//               let y1 = y + pos[d + 1]
//
//               if (x1 >= 0 && y1 >= 0 && x1 < n && y1 < n) {
//                 if (grid[x1][y1] === 0) {
//                   grid[x1][y1] = -1
//                   queue.push([x1, y1])
//                 } else if (grid[x1][y1] === 1) {
//                   return ans
//                 }
//               }
//             }
//           }
//
//           ans++
//         }
//       }
//     }
//   }
//
//   return 0
// }

// dfs + bfs
const shortestBridge = function(grid) {
  const pos = [0, -1, 0, 1, 0]
  const n = grid.length
  const queue = []

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j, grid, queue, pos)

        let ans = 0

        while (queue.length > 0) {
          const len = queue.length

          for (let k = 0; k < len; k++) {
            const cell = queue.shift()
            const [x, y] = cell

            for (let d = 0; d < 4; d++) {
              const x1 = x + pos[d]
              const y1 = y + pos[d + 1]

              if (x1 >= 0 && y1 >= 0 && x1 < n && y1 < n) {
                if (grid[x1][y1] === 0) {
                  grid[x1][y1] = -1
                  queue.push([x1, y1])
                } else if (grid[x1][y1] === 1) {
                  return ans
                }
              }
            }
          }

          ans++
        }
      }
    }
  }

  return 0
}

const dfs = (x, y, grid, queue, pos) => {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid.length || grid[x][y] !== 1) {
    return
  }

  grid[x][y] = -1
  queue.push([x, y])

  for (let i = 0; i < 4; i++) {
    dfs(x + pos[i], y + pos[i + 1], grid, queue, pos)
  }
}

console.log(shortestBridge(grid))
