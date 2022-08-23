/**
 * @param {number[][]} board
 * @return {number}
 */

let board
board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
board = [[0, 1], [1, 0]]
board = [[1, 0], [1, 0]]

const bitCount = (num) => num.toString(2).split('0').join('').length

const movesToChessboard = (board) => {
  const n = board.length
  let rowMask = 0
  let colMask = 0

  // check the first row and column
  for (let i = 0; i < n; i++) {
    rowMask |= (board[0][i] << i)
    colMask |= (board[i][0] << i)
  }

  const reverseRowMask = ((1 << n) - 1) ^ rowMask
  const reverseColMask = ((1 << n) - 1) ^ colMask

  let rowCount = 0
  let colCount = 0
  for (let i = 0; i < n; i ++) {
    let currentRowMask = 0
    let currentColMask = 0

    for (let j = 0; j < n; j++) {
      currentRowMask |= (board[i][j] << j)
      currentColMask |= (board[j][i] << j)
    }

    // check if every row is valid
    if (currentRowMask !== rowMask && currentRowMask !== reverseRowMask) {
      return -1
    } else if (currentRowMask === rowMask) {
      // record number of same row as the first row
      rowCount++
    }

    // check if every column is valid
    if (currentColMask !== colMask && currentColMask !== reverseColMask) {
      return -1
    } else if (currentRowMask === rowMask) {
      // record number of same column as the first column
      colCount++
    }
  }
  const rowMoves = getMoves(rowMask, rowCount, n)
  const colMoves = getMoves(colMask, colCount, n)
  return (rowMoves === -1 || colMoves === -1) ? -1 : (rowMoves + colMoves)
};

const getMoves = (mask, count, n) => {
  const ones = bitCount(mask)
  if ((n & 1) === 1) {
    //
    if (Math.abs(n - 2 * ones) !== 1 || Math.abs(n - 2 * count) !== 1) {
      return -1
    }

    if (ones === (n >> 1)) {
      return Math.floor(n / 2) - bitCount(mask & 0xAAAAAAAA)
    } else {
      return Math.floor((n + 1) / 2) - bitCount(mask & 0x55555555)
    }
  } else {
    if (ones !== (n >> 1) || count !== (n >> 1)) {
      return -1
    }
    const count0 = Math.floor(n / 2) - bitCount(mask & 0xAAAAAAAA)
    const count1 = Math.floor(n / 2) - bitCount(mask & 0x55555555)
    return Math.min(count0, count1)
  }
}

console.log(movesToChessboard(board));
