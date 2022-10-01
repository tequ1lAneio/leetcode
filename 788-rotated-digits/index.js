/**
 * @param {number} n
 * @return {number}
 */

const n = 159

// const rotatedDigits = (n) => {
//   const checker = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1]
//   let ans = 0
//
//   for (let i = 1; i <= n; i++) {
//     let str = '' + i
//     let changed = false
//     let isValid = true
//
//     for (let j = 0; j < str.length; j++) {
//       const code = checker[str[j].charCodeAt() - '0'.charCodeAt()]
//       if (code === 1) {
//         changed = true
//       } else if (code === -1) {
//         isValid = false
//       }
//     }
//
//     if (changed && isValid) {
//       ans++
//     }
//   }
//
//   return ans
// }

// dp
const rotatedDigits = n => {
  const checker = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1]
  let digit = []

  while (n > 0) {
    digit.push(n % 10)
    n = Math.floor(n / 10)
  }

  digit = _.reverse(digit)

  const dfs = (pos, bound, diff) => {

  }

  return dfs(0, 1, 0)
}

console.log(rotatedDigits(n))
