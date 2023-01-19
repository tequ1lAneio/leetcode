/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */

let s, knowledge
s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
s = "hi(name)", knowledge = [["a","b"]]
s = "(a)(a)(a)aaa", knowledge = [["a","yes"]]

const evaluate = (s, knowledge) => {
  const dict = new Map()

  for (const x of knowledge) {
    dict.set(x[0], x[1])
  }

  let addKey = false
  let key = ''
  let ans = ''

  for (let i = 0; i < s.length; i++) {
    const c = s[i]

    if (c === '(') {
      addKey = true
    } else if (c === ')') {
      if (dict.has(key)) {
        ans += dict.get(key)
      } else {
        ans += '?'
      }

      addKey = false
      key = ''
    } else {
      if (addKey) {
        key += c
      } else {
        ans += c
      }
    }
  }

  return ans
}

console.log(evaluate(s, knowledge))
