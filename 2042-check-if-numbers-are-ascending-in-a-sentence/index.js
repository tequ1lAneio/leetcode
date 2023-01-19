/**
 * @param {string} s
 * @return {boolean}
 */

let s
s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
s = "4 5 11 26"

const areNumbersAscending = (s) => {
  let i = 0
  let prev = 0
  while (i < s.length) {
    if (isDigit(s[i])) {
      let cur = 0

      while (i < s.length && isDigit(s[i])) {
        cur = cur * 10 + s[i].charCodeAt() - '0'.charCodeAt()
        i++
      }

      if (cur <= prev) {
        return false
      }
      prev = cur
    } else {
      i++
    }
  }

  return true
}

const isDigit = char => parseFloat(char).toString() !== 'NaN'

console.log(areNumbersAscending(s))
