/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */

let order, s
order = "cba", s = "abcd"
// order = "cbafg", s = "abcd"
order = "exv", s = "xwvee"

// const customSortString = (order, s) => {
//   const val = new Array(26).fill(27)
//
//   for (let i = 0; i < order.length; i++) {
//     val[order[i].charCodeAt() - 'a'.charCodeAt()] = i + 1
//   }
//
//   let arr = new Array(s.length).fill(0).map((_, i) => s[i])
//   arr.sort((a, b) => val[a.charCodeAt() - 'a'.charCodeAt()] - val[b.charCodeAt() - 'a'.charCodeAt()])
//
//   return arr.join('')
// }


// count sort
const customSortString = (order, s) => {
  const map = new Map()

  for (const char of s) {
    map.set(char, map.has(char) ? map.get(char) + 1 : 1)
  }

  let ans = ''
  for (const char of order) {
    while (map.get(char) > 0) {
      map.set(char, map.get(char) - 1)
      ans += char
    }
  }

  for (const char of s) {
    while (map.get(char) > 0) {
      ans += char
      map.set(char, map.get(char) - 1)
    }
  }

  return ans
}

console.log(customSortString(order, s))
