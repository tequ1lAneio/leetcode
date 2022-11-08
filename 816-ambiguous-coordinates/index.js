/**
 * @param {string} s
 * @return {string[]}
 */

let s
s = "(123)"
s = "(00011)"
s = "(0123)"
// s = "(100)"

const ambiguousCoordinates = (s) => {
  let ans = []
  const str = s.slice(1, s.length - 1)

  for (let i = 1; i < str.length; i++) {
    const l = getPos(str.slice(0, i))
    if (l.length === 0) {
      continue
    }

    const r = getPos(str.slice(i))
    if (r.length === 0) {
      continue
    }

    for (const x of l) {
      for (const y of r) {
        ans.push(`(${x}, ${y})`)
      }
    }
  }

  return ans
}

const getPos = (s) => {
  const pos = []

  if (s[0] !== '0' || s === '0') {
    pos.push(s)
  }

  for (let i = 1; i < s.length; i++) {
    if ((i !== 1 && s[0] === '0') || s[s.length - 1] === '0') {
      continue
    }

    pos.push(`${s.slice(0, i)}.${s.slice(i)}`)
  }

  return pos
}

console.log(ambiguousCoordinates(s))
