/**
 * @param {string} s
 * @return {string[]}
 */

let s
s = "a1b2"
// s = "3z4"

const isLetter = (char) => {
  return 'a' <= char && char <= 'z' || 'A' <= char && char <= 'Z';
}

// bfs
// const letterCasePermutation = (s) => {
//   const queue = ['']
//   let ans = []
//
//   while (queue.length) {
//     const cur = queue[0]
//     const pos = cur.length
//
//     if (pos === s.length) {
//       ans.push(cur)
//       queue.shift()
//     } else {
//       if (isLetter(s[pos])) {
//         queue.push(cur + swapCase(s[pos]))
//       }
//       queue[0] += s[pos]
//     }
//   }
//
//   return ans
// }
//
// const swapCase = (char) => {
//   if (char >= 'a' && char <= 'z') {
//     return char.toUpperCase()
//   }
//
//   if (char >= 'A' && char <= 'Z') {
//     return char.toLowerCase()
//   }
// }

// dfs
// const letterCasePermutation = (s) => {
//   const ans = []
//
//   const dfs = (arr, pos) => {
//     while (pos < arr.length && !isLetter(s[pos])) {
//       pos++
//     }
//
//     if (pos === arr.length) {
//       ans.push(arr.join(''))
//       return
//     }
//
//     // arr[pos] = swapCase(char)
//     arr[pos] = String.fromCharCode(arr[pos].charCodeAt() ^ 32)
//     dfs(arr, pos + 1)
//     arr[pos] = String.fromCharCode(arr[pos].charCodeAt() ^ 32)
//     dfs(arr, pos + 1)
//   }
//
//   dfs([...s], 0)
//   return ans
// }


// mask
const letterCasePermutation = (s) => {
  const ans = []
  const n = s.length
  let m = 0

  for (let i = 0; i < n; i++) {
    if (isLetter(s[i])) {
      m++
    }
  }

  for (let i = 0; i < 1 << m; i++) {
    let sb = ''
    for (let j = 0, k = 0; j < n; j++) {
      if (isLetter(s[j]) && (i & (1 << k++)) !== 0) {
        sb += s[j].toUpperCase()
      } else {
        sb += s[j].toLowerCase()
      }
    }

    ans.push(sb)
  }

  return ans
}

console.log(letterCasePermutation(s))
