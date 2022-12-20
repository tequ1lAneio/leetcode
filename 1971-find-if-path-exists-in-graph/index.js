/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

let n, edges, source, destination
n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5

// bfs
// const validPath = function(n, edges, source, destination) {
//   const visited = new Array(n).fill(false)
//   const matrix = new Array(n).fill(0).map(_ => new Array())
//   for (let i = 0; i < edges.length; i++) {
//     const [x, y] = edges[i]
//     matrix[x].push(y)
//     matrix[y].push(x)
//   }
//
//   const queue = []
//   queue.push(source)
//   visited[source] = true
//
//   while (queue.length) {
//     const vertex = queue.shift()
//     if (vertex === destination) {
//       break
//     }
//
//     for (const next of matrix[vertex]) {
//       if (!visited[next]) {
//         queue.push(next)
//         visited[next] = true
//       }
//     }
//   }
//
//   return visited[destination]
// }

// dfs
const validPath = function(n, edges, source, destination) {
  const visited = new Array(n).fill(false)
  const matrix = new Array(n).fill(0).map(_ => new Array())
  for (let i = 0; i < edges.length; i++) {
    const [x, y] = edges[i]
    matrix[x].push(y)
    matrix[y].push(x)
  }

  const dfs = (s) => {
    if (s === destination) {
      return true
    }
    visited[s] = true

    for (const next of matrix[s]) {
      if (!visited[next] && dfs(next)) {
        return true
      }
    }

    return false
  }

  return dfs(source)
}

console.log(validPath(n, edges, source, destination))
