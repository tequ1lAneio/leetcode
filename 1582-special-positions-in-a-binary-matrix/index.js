/**
 * @param {number[][]} mat
 * @return {number}
 */

let mat
mat = [
  [1,0,0],
  [0,0,1],
  [1,0,0]
]
mat = [[1,0,0],
  [0,1,0],
  [0,0,0]]
// mat = [[0,0,0,0,0],
//   [1,0,0,0,0],
//   [0,1,0,0,0],
//   [0,0,1,0,0],
//   [0,0,0,1,1]]
// mat = [
//   [0,0,1,0],
//   [0,0,0,0],
//   [0,0,0,0],
//   [0,1,0,0]
// ]
// mat = [
//   [0,0,0,0,0,1,0,0],
//   [0,0,0,0,1,0,0,1],
//   [0,0,0,0,1,0,0,0],
//   [1,0,0,0,1,0,0,0],
//   [0,0,1,1,0,0,0,0]
// ]
// mat = [
//   [0,0,1,0],
//   [0,0,0,0],
//   [0,0,0,0],
//   [0,1,0,0]
// ]

// const numSpecial = (mat) => {
//   const m = mat.length
//   const n = mat[0].length
//   const rowCount = new Array(m).fill(0)
//   const columnCount = new Array(n).fill(0)
//   let ans = 0
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (mat[i][j]) {
//         rowCount[i]++
//         columnCount[j]++
//       }
//     }
//   }
//
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (columnCount[j] === 1 && rowCount[i] === 1 && mat[i][j] === 1) {
//         ans++
//       }
//     }
//   }
//
//   return ans
// }

const numSpecial = (mat) => {
  const m = mat.length
  const n = mat[0].length
  let ans = 0

  for (let i = 0; i < m; i++) {
    let count = 0

    for (let j = 0; j < n; j++) {
      if (mat[i][j]) {
        count++
      }
    }

    if (i === 0) {
      count--
    }

    if (count > 0) {
      for (let j = 0; j < n; j++) {
        if (mat[i][j]) {
          mat[0][j] += count
        }
      }
    }
  }


  for (let i = 0; i < n; i++) {
    if (mat[0][i] === 1) {
      ans++
    }
  }

  return ans
}

console.log(numSpecial(mat))
