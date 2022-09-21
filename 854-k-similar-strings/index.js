/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

let s1, s2
s1 = "ab", s2 = "ba"
s1 = "abc", s2 = "bca"
s1 = "cadbacfeac", s2 = "baeacdacfc"

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
//   console.log(visited)
//   return ans
// };

// dfs
const kSimilarity = () => {

}

console.log(kSimilarity(s1, s2))
