/**
 * @param {string} number
 * @return {string}
 */

let number
number = "1-23-45 6"
// number = "123 4-567"
// number = "123 4-5678"
// number = "12"
// number = "--17-5 229 35-39475 "

const isDigit = s => !isNaN(parseFloat(s))

const reformatNumber = (number) => {
  let n = number.length
  let digit = ''

  for (let i = 0; i < n; i++) {
    const cur = '' + number[i]
    if (isDigit(number[i])) {
      digit += cur
    }
  }

  let ans = ''
  let pointer = 0
  let length = digit.length
  while (length > 4) {
    for (let i = 0; i < 3; i++) {
      ans += digit[pointer]
      pointer++
    }
    length -= 3
    ans += '-'
  }

  if (length === 4) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        ans += digit[pointer]
        pointer ++
      }
      if (i === 0) {
        ans += '-'
      }
    }
  } else {
    for (let i = 0; i < length; i++) {
      ans += digit[pointer]
      pointer++
    }
  }

  return ans
}

console.log(reformatNumber(number))
