/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


let matrix
matrix = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
matrix = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]

var setZeroes = function(matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const rows = new Array(m)
  const columns = new Array(n)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rows[i] = 0
        columns[j] = 0
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {

    }
  }
};
