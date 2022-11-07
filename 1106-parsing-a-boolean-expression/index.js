/**
 * @param {string} expression
 * @return {boolean}
 */

let expression
expression = "!(f)"
// expression = "|(f,t)"
// expression = "&(t,f)"
expression = "|(&(t,f,t),!(t))"

const parseBoolExpr = (expression) => {
  const stack = []

  for (const char of expression) {
    if (char === ',') {
      continue
    } else if (char !== ')') {
      stack.push(char)
    } else {
      let t = 0
      let f = 0

      while (stack[stack.length - 1] !== '(') {
        const c = stack.pop()
        if (c === 't') {
          t++
        } else {
          f++
        }
      }

      stack.pop()
      const sign = stack.pop()
      switch (sign) {
        case '!':
          stack.push(f > 0 ? 't' : 'f')
          break
        case '|':
          stack.push(t > 0 ? 't' : 'f')
          break
        case '&':
          stack.push(f > 0 ? 'f' : 't')
          break
      }
    }
  }

  return stack.pop() === 't'
}

console.log(parseBoolExpr(expression))
