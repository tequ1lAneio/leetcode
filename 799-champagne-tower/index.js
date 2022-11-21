/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */

let poured, query_row, query_glass
poured = 1, query_glass = 1, query_row = 1
poured = 2, query_glass = 1, query_row = 1
// poured = 100000009, query_row = 33, query_glass = 17

const champagneTower = (poured, query_row, query_glass) => {
  let row = [poured]

  for (let i = 1; i <= query_row; i++) {
    const nextRow = new Array(i + 1).fill(0)

    for (let j = 0; j < i; j++) {
      const volume = row[j]

      if (volume > 1) {
        nextRow[j] += (volume - 1) / 2
        nextRow[j + 1] += (volume - 1) / 2
      }
    }

    row = nextRow
  }

  return Math.min(1, row[query_glass])
}

console.log(champagneTower(poured, query_row, query_glass))
