/**
 * @param {string} s
 * @return {number}
 */

let s
s = 'aa'
// s = 'abca'
// s = 'cbxyz'
// s = 'cabbac'

// hash map
// const maxLengthBetweenEqualCharacters = (s) => {
//   let ans = -1
//   let map = new Map()

  // for (let i = 0; i < s.length; i++) {
  //   if (map.has(s[i])) {
  //     const arr = map.get(s[i])
  //     arr[1] = i
  //     ans = Math.max(ans, arr[1] - arr[0] - 1)
  //   } else {
  //     map.set(s[i], [i])
  //   }
  // }

//   return ans
// };

// use array
const maxLengthBetweenEqualCharacters = (s) => {
  let ans = -1
  const firstIndexes = new Array(26).fill(-1)

  for (let i = 0; i < s.length; i++) {
    if (firstIndexes[s[i].charCodeAt() - 'a'.charCodeAt()] < 0) {
      firstIndexes[s[i].charCodeAt() - 'a'.charCodeAt()] = i
    } else {
      ans = Math.max(ans, i - firstIndexes[s[i].charCodeAt() - 'a'.charCodeAt()] - 1);
    }
  }

  return ans
}

console.log(maxLengthBetweenEqualCharacters(s));
