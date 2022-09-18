/**
 * @param {number[][]} grid
 * @return {number}
 */

let grid
grid = [[1, 0], [0, 1]]
grid = [[1, 1], [1, 0]]
grid = [[1, 1], [1, 1]]
grid = [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]]
grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0],
]

const isValid = (n, x, y) => x >= 0 && x < n && y >= 0 && y < n

const dfs = (grid, x, y, tag, t, pos) => {
  let res = 1
  tag[x][y] = t

  for (let i = 0; i < 4; i++) {
    const x1 = x + pos[i]
    const y1 = y + pos[i + 1]

    if (isValid(grid.length, x1, y1) && grid[x1][y1] === 1 && tag[x1][y1] === 0) {
      res += dfs(grid, x1, y1, tag, t, pos)
    }
  }

  return res
}

const largestIsland = (grid) => {
  const pos = [0, -1, 0, 1, 0]
  const n = grid.length
  const tag = new Array(n).fill(0).map(_ => new Array(n).fill(0))
  const area = new Map()
  let ans = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && tag[i][j] === 0) {
        const t = i * n + j + 1
        area.set(t, dfs(grid, i, j, tag, t, pos))
        ans = Math.max(ans, area.get(t))
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        continue
      }

      const connected = new Set()
      let sum = 1
      for (let k = 0; k < 4; k++) {
        const x = i + pos[k]
        const y = j + pos[k + 1]

        if (!isValid(n, x, y) || tag[x][y] === 0 || connected.has(tag[x][y])) {
          continue

        }

        connected.add(tag[x][y])
        sum += area.get(tag[x][y])
      }

      ans = Math.max(ans, sum)
    }
  }

  return ans
}

console.log(largestIsland(grid))
