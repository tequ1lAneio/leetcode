/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */

let sequence, word
sequence = "ababc", word = "ab"
sequence = "ababc", word = "ba"
// sequence = "ababc", word = "ac"
sequence = 'a', word = 'abb'

// const maxRepeating = function(sequence, word) {
//   const n = sequence.length
//   const m = word.length
//
//   const dp = new Array(n).fill(0)
//   for (let i = m - 1; i < n; i++) {
//     let valid = true
//
//     for (let j = 0; j < m; j++) {
//       if (sequence[i - m + j + 1] !== word[j]) {
//         valid = false
//         break
//       }
//     }
//
//     if (valid) {
//       dp[i] = (i === m - 1 ? 0 : dp[i - m]) + 1
//     }
//   }
//
//   return Math.max(...dp)
// }

// KMP
const maxRepeating = (sequence, word) => {
  const n = sequence.length
  const m = word.length

  if (n < m) {
    return 0
  }

  const fail = new Array(n).fill(-1)
  for (let i = 1; i < m; i++) {
    let j = fail[i - 1]

    while (j !== -1 && word[j + 1] !== word[i]) {
      j = fail[j]
    }

    if (word[j + 1] === word[i]) {
      fail[i] = j + 1
    }
  }

  const dp = new Array(n).fill(0)
  let j = -1

  for (let i = 0; i < n; i++) {
    while (j !== -1 && word[j + 1] !== sequence[i]) {
      j = fail[j]
    }

    if (word[j + 1] === sequence[i]) {
      j++

      if (j === m - 1) {
        dp[i] = (i >= m ? dp[i - m] : 0) + 1
        j = fail[j]
      }
    }
  }


  return Math.max(...dp)
}

console.log(maxRepeating(sequence, word))
