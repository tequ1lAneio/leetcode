const _ = require('lodash')
/**
 * @param {number} n
 * @return {number}
 */

let n
n = 206
// n = 25

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
const rotatedDigits = (n) => {
  const checker = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1]
  let ans = 0
  const memo = new Array(5).fill(0).map(() => new Array(2).fill(0).map(() => new Array(2).fill(-1)))
  let digit = []

  while (n > 0) {
    digit.push(n % 10)
    n = Math.floor(n / 10)
  }

  digit = _.reverse(digit)

  const dfs = (pos, bound, diff) => {
    if (pos === digit.length) {
      return diff
    }

    if (memo[pos][bound][diff] !== -1) {
      return memo[pos][bound][diff]
    }

    let ret = 0

    for (let i = 0; i <= (bound !== 0 ? digit[pos] : 9); i++) {
      if (checker[i] !== -1) {
        ret += dfs(
          pos + 1,
          bound !== 0 && i === digit[pos] ? 1 : 0,
          diff !== 0 || checker[i] === 1 ? 1 : 0
        )
      }
    }

    memo[pos][bound][diff] = ret
    return ret
  }

  return dfs(0, 1, 0)
}

// var rotatedDigits = function(n) {
//   const check = [0, 0, 1, -1, -1, 1, 1, -1, 0, 1];
//   const memo = new Array(5).fill(0).map(() => new Array(2).fill(0).map(() => new Array(2).fill(-1)));
//   let digits = [];
//
//   const dfs = (pos, bound, diff) => {
//     if (pos === digits.length) {
//       return diff;
//     }
//     if (memo[pos][bound][diff] !== -1) {
//       return memo[pos][bound][diff];
//     }
//
//     let ret = 0;
//     for (let i = 0; i <= (bound !== 0 ? digits[pos] : 9); ++i) {
//       if (check[i] != -1) {
//         ret += dfs(
//           pos + 1,
//           bound !== 0 && i === digits[pos] ? 1 : 0,
//           diff !== 0 || check[i] === 1 ? 1 : 0
//         );
//       }
//     }
//     return memo[pos][bound][diff] = ret;
//   }
//
//   while (n !== 0) {
//     digits.push(n % 10);
//     n = Math.floor(n / 10);
//   }
//   digits = _.reverse(digits);
//
//   const ans = dfs(0, 1, 0);
//   return ans;
// };

console.log(rotatedDigits(n))
