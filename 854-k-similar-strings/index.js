/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

let s1, s2
s1 = "ab", s2 = "ba"
// s1 = "abc", s2 = "bca"
s1 = "cadbacfeac", s2 = "baeacdacfc"
s1 = "bccaba", s2 = "abacbc"

const swap = (cur, i, j) => {
  const arr =  [...cur]
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
  return arr.join('')
}

// bfs
// const kSimilarity = (s1, s2) => {
//   const n = s1.length
//   const queue = []
//   const visited = new Set()
//   let ans = 0
//
//   queue.push([s1, 0])
//   visited.add(s1)
//
//   while (queue.length) {
//     const m = queue.length
//
//     for (let i = 0; i < m; i++) {
//       let [cur, pos] = queue.shift()
//
//       if (cur === s2) {
//         return ans
//       }
//
//       while (pos < n && cur[pos] === s2[pos]) {
//         pos++
//       }
//
//       for (let j = pos + 1; j < n; j++) {
//         if (cur[j] === s2[j]) {
//           continue
//         }
//
//         if (cur[j] === s2[pos]) {
//           const next = swap(cur, pos, j)
//           if (!visited.has(next)) {
//             visited.add(next)
//             queue.push([next, pos + 1])
//           }
//         }
//       }
//     }
//     ans++
//   }
//
//   return ans
// };

// dfs
const kSimilarity = (s1, s2) => {
  let str1 = ''
  let str2 = ''

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      str1 += s1[i]
      str2 += s2[i]
    }
  }

  if (str1.length === 0) {
    return 0
  }

  let ans = str1.length - 1

  const dfs = (pos, cost, str1, str2) => {
    if (cost > ans) {
      return
    }

    while (pos < str1.length && str1[pos] === str2[pos]) {
      pos++
    }

    if (pos === str1.length) {
      ans = Math.min(ans, cost)
      return
    }

    if (cost + minSwap(str1, str2, pos) >= ans) {
      return
    }

    for (let i = 0; i < str1.length; i++) {
      if (str2[pos] === str1[i]) {
        const next = swap(str1, i, pos)
        dfs(pos + 1, cost + 1, next, str2)
      }
    }
  }

  const minSwap = (str1, str2, pos) => {
    let total = 0
    for (let i = pos; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        total++
      }
    }

    return Math.floor((total + 1) / 2)
  }

  dfs(0, 0, str1, str2)
  return ans
}

console.log(kSimilarity(s1, s2))
