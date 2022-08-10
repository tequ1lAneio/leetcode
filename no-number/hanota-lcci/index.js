/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */

const aa = [5, 4, 3, 2, 1]
const bb = []
const cc = []

const hanota = (A, B, C) => {
  const n = A.length

  const move = (n, a, b, c) => {
    if (n > 0) {
      move(n - 1, a, c, b)
      c.push(a.pop())
      move(n - 1, b, a, c)
    }
  }

  move(n, A, B, C)
}

hanota(aa, bb, cc)
console.log(aa, bb, cc)
