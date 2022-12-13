/**
 * @param {string} sentence
 * @return {boolean}
 */

let sentence
sentence = "thequickbrownfoxjumpsoverthelazydog"
// sentence = "leetcode"

// const checkIfPangram = (sentence) => {
//   let n = sentence.length
//   const alps = new Array(26).fill(false)
//
//   for (let i = 0; i < n; i++) {
//     const idx = sentence[i].charCodeAt() - 'a'.charCodeAt()
//     alps[idx] = true
//   }
//
//   for (const alp of alps) {
//     if (!alp) {
//       return false
//     }
//   }
//
//   return true
// }

// binary
const checkIfPangram = (sentence) => {
  let state = 0

  for (let i = 0; i < sentence.length; i++) {
    state |= 1 << (sentence[i].charCodeAt() - 'a'.charCodeAt())
  }

  return state === (1 << 26) - 1
}


console.log(checkIfPangram(sentence))
