/**
 * @param {string} s
 * @return {boolean}
 */

let s
s = '1001'
s = '110'

// const checkOnesSegment = (s) => {
//   let ends = false
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '0' && !ends) {
//       ends = true
//       continue
//     }
//
//     if (s[i] === '1' && ends) {
//       return false
//     }
//   }
//
//   return true
// }

const checkOnesSegment = (s) => {
  return s.indexOf('01') === -1
}

console.log(checkOnesSegment(s))
