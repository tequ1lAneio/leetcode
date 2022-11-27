const _ = require('lodash')
const {PriorityQueue} = require('@datastructures-js/priority-queue')
/**
 * @param {number[][]} edges
 * @param {number} maxMoves
 * @param {number} n
 * @return {number}
 */

let edges, maxMoves, n
edges = [[0, 1, 10], [0, 2, 1], [1, 2, 2]], maxMoves = 6, n = 3
edges = [[0, 1, 4], [1, 2, 6], [0, 2, 8], [1, 3, 1]], maxMoves = 10, n = 4
// edges = [[1,2,4],[1,4,5],[1,3,1],[2,3,4],[3,4,5]], maxMoves = 17, n = 5
edges = [[2, 4, 2], [3, 4, 5], [2, 3, 1], [0, 2, 1], [0, 3, 5]], maxMoves = 14, n = 5

const reachableNodes = (edges, maxMoves, n) => {
  // generate graph
  const graph = new Array(n).fill(0).map(_ => new Array())
  for (const edge of edges) {
    const [u, v, nodes] = edge
    graph[u].push([v, nodes])
    graph[v].push([u, nodes])
  }

  const used = new Map()
  const visited = new Set()
  const queue = new PriorityQueue((a, b) => a[0] - b[0])
  queue.enqueue([0, 0])
  let reachableNodes = 0

  while (!queue.isEmpty() && queue.front()[0] <= maxMoves) {
    let pair = queue.dequeue()
    let [step, u] = pair

    if (visited.has(u)) {
      continue
    } else {
      visited.add(u)
    }

    reachableNodes++

    for (const next of graph[u]) {
      let [v, nodes] = next
      if (nodes + step + 1 <= maxMoves && !visited.has(v)) {
        queue.enqueue([nodes + step + 1, v])
      }

      used.set(encode(u, v, n), Math.min(nodes, maxMoves - step))
    }
  }

  for (const edge of edges) {
    let [u, v, nodes] = edge
    reachableNodes += Math.min(nodes, (used.get(encode(u, v, n)) || 0) + (used.get(encode(v, u, n)) || 0))
  }

  return reachableNodes
}

const encode = (u, v, n) => {
  return u * n + v;
}


// const reachableNodes = (edges, maxMoves, n) => {
//   const INF = Number.MAX_SAFE_INTEGER
//   const longEdges = []
//
//   // generate graph
//   const graph = new Array(n).fill(0).map(_ => new Array(n).fill(0))
//   for (const edge of edges) {
//     const [u, v, nodes] = edge
//     graph[u][v] = nodes
//     graph[v][u] = nodes
//
//     if (nodes > maxMoves) {
//       longEdges.push(edge)
//     }
//   }
//
//   const dist = []
//   const visited = []
//   let len = graph.length
//
//   const minDistance = () => {
//     let min = INF
//     let minIndex = -1
//
//     for (let i = 0; i < dist.length; i++) {
//       if (visited[i] === false && dist[i] <= min) {
//         min = dist[i]
//         minIndex = i
//       }
//     }
//
//     return minIndex
//   }
//
//   for (let i = 0; i < len; i++) {
//     dist[i] = INF
//     visited[i] = false
//   }
//
//   dist[0] = 0
//
//   for (let i = 0; i < len; i++) {
//     const u = minDistance()
//     visited[u] = true
//
//     for (let v = 0; v < len; v++) {
//       if (
//         !visited[v]
//         && graph[u][v]
//         && dist[u] + graph[u][v] < dist[v]
//       ) {
//         dist[v] = dist[u] + graph[u][v]
//       }
//     }
//   }
//
//   let extra = 0
//   for (const edge of longEdges) {
//     const [u, v, nodes] = edge
//     let eu = 0
//     let ev = 0
//
//     if (dist[u] < nodes) {
//       extra += nodes - dist[u]
//     }
//
//     if (dist[v] < nodes) {
//       extra += nodes - dist[v]
//     }
//
//     if (eu + ev > nodes) {
//       extra += nodes
//     } else {
//       extra = extra + eu + ev
//     }
//   }
//
//   console.log(extra)
//
//   return _.sum(dist) + extra
// }

console.log(reachableNodes(edges, maxMoves, n))
