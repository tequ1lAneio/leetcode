/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

let n, a, b
n = 1, a = 2, b = 3
// n = 4, a = 2, b = 3
n = 3, a = 6, b = 4
// n = 1000000000, a = 40000, b = 40000

const lcm = (a, b) => Math.floor(a * b / gcd(a, b))
const gcd = (a, b) => b !== 0 ? gcd(b, a % b) : a

// binary
// const nthMagicalNumber = (n, a, b) => {
//   const MOD = 1e9 + 7
//   const c = lcm(a, b)
//
//   let l = Math.min(a, b)
//   let r = n * Math.min(a, b)
//
//   while (l <= r) {
//     const mid = Math.floor((l + r) / 2)
//     const count = Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / c)
//
//     if (count >= n) {
//       r = mid - 1
//     } else {
//       l = mid + 1
//     }
//   }
//
//   return (r + 1) % MOD
// }


const nthMagicalNumber = (n, a, b) => {
  const MOD = 1e9 + 7
  const c = lcm(a, b)

  const m = Math.floor(c / a) + Math.floor(c / b) - 1
  const r = n % m
  const ans = c * Math.floor(n / m) % MOD

  if (r === 0) {
    return ans
  }

  let addA = a
  let addB = b

  for (let i = 0; i < r - 1; i++) {
    if (addA < addB) {
      addA += a
    } else {
      addB += b
    }
  }

  return (ans + Math.min(addA, addB) % MOD) % MOD
}

console.log(nthMagicalNumber(n, a, b))
