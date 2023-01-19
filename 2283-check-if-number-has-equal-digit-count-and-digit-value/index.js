/**
 * @param {string} num
 * @return {boolean}
 */

let num
num = "1210"
num = "030"

const digitCount = function(num) {
  const map = new Map()

  for (let i = 0; i < num.length; i++) {
    const key = num[i].charCodeAt() - '0'.charCodeAt()
    map.set(key, (map.get(key) || 0) + 1)
  }

  for (let i = 0; i < num.length; i++) {
    const value = num[i].charCodeAt() - '0'.charCodeAt()

    if ((map.get(i) || 0) !== value) {
      return false
    }
  }

  return true
}

console.log(digitCount(num))
