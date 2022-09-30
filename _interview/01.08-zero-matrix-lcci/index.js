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

// mark in first line&row
// const setZeroes = (matrix) => {
//   const m = matrix.length
//   const n = matrix[0].length
//   let colHasZero = false
//   let rowHasZero = false
//
//   for (let i = 0; i < m; i++) {
//     if (matrix[i][0] === 0) {
//       colHasZero = true
//       break
//     }
//   }
//
//   for (let i = 0; i < n; i++) {
//     if (matrix[0][i] === 0) {
//       rowHasZero = true
//       break
//     }
//   }
//
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       if (matrix[i][j] === 0) {
//         matrix[i][0] = 0
//         matrix[0][j] = 0
//       }
//     }
//   }
//
//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       if (matrix[0][j] === 0 || matrix[i][0] === 0) {
//         matrix[i][j] = 0
//       }
//     }
//   }
//
//   if (colHasZero) {
//     for (let i = 0; i < m; i++) {
//       matrix[i][0] = 0
//     }
//   }
//
//   if (rowHasZero) {
//     for (let i = 0; i < n; i++) {
//       matrix[0][i] = 0
//     }
//   }
//
//   return matrix
// }

// single mark
const setZeroes = (matrix) => {
  const m = matrix.length
  const n = matrix[0].length
  let colHasZero = false

  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      colHasZero = true
    }

    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }

    if (colHasZero) {
      matrix[i][0] = 0
    }
  }
}

console.log(setZeroes(matrix))
