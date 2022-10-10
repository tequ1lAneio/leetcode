/**
 * @param {string} s
 * @return {number}
 */

let s
s = "()"    // 1
s = "(())"  // 2
s = "()()"  // 2
s = "(()(()))" // 6

// const scoreOfParentheses = (s) => {
//   let ans = 0
//   let d = 0
//
//   for (let i = 0; i < s.length; i++) {
//     d += s[i] === '(' ? 1 : -1
//     if (s[i] === ')' && s[i - 1] === '(') {
//       ans += 1 << d
//     }
//   }
//
//   return ans
// }

// const scoreOfParentheses = (s) => {
//   if (s.length === 2) {
//     return 1
//   }
//
//   const n = s.length
//   let d = 0
//   let len = 0
//   for (let i = 0; i < n; i++) {
//     d += s[i] === '(' ? 1 : -1
//     if (d === 0) {
//       len = i + 1
//       break
//     }
//   }
//
//   if (len === n) {
//     return 2 * scoreOfParentheses(s.slice(1, n - 1))
//   } else {
//     return scoreOfParentheses(s.slice(0, len)) + scoreOfParentheses(s.slice(len))
//   }
// }

const scoreOfParentheses = (s) => {
  const stack = [0]

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(0)
    } else {
      let top = stack.pop()
      top = stack.pop() + Math.max(top * 2, 1)
      stack.push(top)
    }
  }

  return stack[0]
}

console.log(scoreOfParentheses(s))
