/**
 * @param {string} s
 * @return {string}
 */


let str = ''
str = 'a0b1c2'
str = 'leetcode'
str = 'covid2019'
// str = 'ab123'


const isDigit = s => isNaN(parseFloat(s))
//
// const reformat = function(s) {
//   const digits = []
//   const strings = []
//
//   for (let i = 0; i < s.length; i++) {
//     if (isDigit(s[i])) {
//       digits.push(s[i])
//     } else {
//       strings.push(s[i])
//     }
//   }
//
//   if (Math.abs(digits.length - strings.length) > 1) {
//     return ''
//   }
//
//   const res = []
//   let i = 0
//   const digitFirst = digits.length > strings.length
//   while (res.length < s.length) {
//     if (digitFirst) {
//       res.push(digits[i])
//       res.push(strings[i])
//     } else {
//       res.push(strings[i])
//       res.push(digits[i])
//     }
//     i++
//   }
//
//   return res.join('')
// }

// double pointers
const reformat = (s) => {
  let digitCount = 0
  for (let i = 0; i < s.length; i++) {
    if (isDigit(s[i])) {
      digitCount++
    }
  }

  const alphaCount = s.length - digitCount
  if (Math.abs(digitCount - alphaCount) > 1) {
    return ''
  }

  const res = s.split('')
  const moreDigits = digitCount > alphaCount
  for (let i = 0, j = 1; i < res.length; i += 2) {
    if (isDigit(res[i]) !== moreDigits) {
      while (isDigit(res[j]) !== moreDigits) {
        j += 2
      }
      [res[i], res[j]] = [res[j], res[i]]
    }
  }

  return res.join('')
}

console.log(reformat(str))
