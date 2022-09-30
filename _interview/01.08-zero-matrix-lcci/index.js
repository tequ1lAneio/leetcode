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
// matrix = [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]

// simulate
// const setZeroes = (matrix) => {
//   const m = matrix.length
//   const n = matrix[0].length
//   const rows = new Array(m).fill(0)
//   const columns = new Array(n).fill(0)
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === 0) {
//         rows[i] = 1
//         columns[j] = 1
//       }
//     }
//   }
//
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (rows[i] || columns[j]) {
//         matrix[i][j] = 0
//       }
//     }
//   }
//
//   return matrix
// }

//
const setZeroes = (matrix) => {

}

console.log(setZeroes(matrix))
