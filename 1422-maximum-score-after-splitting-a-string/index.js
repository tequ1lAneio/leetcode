/**
 * @param {string} s
 * @return {number}
 */

let s
s = '011101'
s = '00111'
// s = '1111'
// s = '00'


// const maxScore = (s) => {
//   let res = 0
//
//   for (let i = 1; i < s.length; i ++) {
//     let left = 0
//     let right = 0
//
//     for (let j = 0; j < i; j++) {
//       if (s[j] === '0') {
//         left++
//       }
//     }
//
//     for (let j = i; j < s.length; j++) {
//       if (s[j] === '1') {
//         right++
//       }
//     }
//
//     res = Math.max(res, left + right)
//   }
//
//   return res
// };

// move pointer
const maxScore = (s) => {
  let res = 0
  let max = 0

  if (s[0] === '0') {
    res++
  }

  for (let i = 1; i < s.length; i++) {
    if (s[i] === '1') {
      res++
    }
  }

  max = res

  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === '0') {
      res++
    } else {
      res--
    }

    max = Math.max(max, res)
  }

  return max
}

console.log(maxScore(s))
