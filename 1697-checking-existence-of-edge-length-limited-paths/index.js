/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */

let n, edgeList, queries
n = 3, edgeList = [[0,1,2],[1,2,4],[2,0,8],[1,0,16]], queries = [[0,1,2],[0,2,5]]
// n = 5, edgeList = [[0,1,10],[1,2,5],[2,3,9],[3,4,13]], queries = [[0,4,14],[1,4,13]]

const distanceLimitedPathsExist = (n, edgeList, queries) => {
  edgeList.sort((a, b) => a[2] - b[2])
  const idx = new Array(queries.length)

  for (let i = 0; i <queries.length; i++) {
    idx[i] = i
  }

  idx.sort((a, b) => queries[a][2] - queries[b][2])

  const uf = new Array(n).fill(0)
  for (let i = 0; i < n; i++) {
    uf[i] = i
  }

  const ans = new Array(queries.length).fill(0)
  let k = 0

  for (const i of idx) {
    while (k < edgeList.length && edgeList[k][2] < queries[i][2]) {
      merge(uf, edgeList[k][0], edgeList[k][1])
      k++
    }

    ans[i] = find(uf, queries[i][0]) === find(uf, queries[i][1])
  }

  return ans
}

const find = (uf, x) => {
  if (uf[x] === x) {
    return x
  }

  return uf[x] = find(uf, uf[x])
}

const merge = (uf, x, y) => {
  x = find(uf, x)
  y = find(uf, y)
  uf[y] = x
}

console.log(distanceLimitedPathsExist(n, edgeList, queries))
