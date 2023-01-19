/**
 * @param {number} n
 * @return {number}
 */

let n
n = 2
n = 4
n = 6

// simulate
const reinitializePermutation = (n) => {
  let perm = new Array(n).fill(0).map((_, i) => i)
  const target = new Array(n).fill(0).map((_, i) => i)
  let step = 0

  while (true) {
    const arr = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
      if ((i & 1) !== 0) {
        arr[i] = perm[Math.floor(n / 2) + Math.floor((i - 1) / 2)]
      } else {
        arr[i] = perm[Math.floor(i / 2)]
      }
    }

    perm = arr
    step++

    if (perm.toString() === target.toString()) {
      break
    }
  }

  return step
}

// formula
const reinitializePermutation = (n) => {
  if (n === 2) {
    return 1
  }

  let step = 1
  let pow2 = 2

  while (pow2 !== 1) {
    step++
    pow2 = pow2 * 2 % (n - 1)
  }

  return step
}

console.log(reinitializePermutation(n))
