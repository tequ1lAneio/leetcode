/**
 * @param {string} text
 * @return {string}
 */

let text
text = "  this   is  a sentence "
text = " practice   makes   perfect"
// text = "hello   world"
// text = "  walks  udp package   into  bar a"
// text = "a"
text = "  hello"

const reorderSpaces = (text) => {
  let spaceCount = 0
  let words = []
  let word = ''
  let ans = ''

  for (const ele of text) {
    if (ele === ' ') {
      spaceCount++
      if (word) {
        words.push(word)
        word = ''
      }
    } else {
      word += ele
    }
  }

  if (word) {
    words.push(word)
  }

  let interval = ''
  const intervalLength = words.length > 1 ? Math.floor(spaceCount / (words.length - 1)) : 0
  for (let i = 0; i < intervalLength; i++) {
    interval += ' '
  }

  let restSpace = ''
  const restSpaceLength = words.length > 1 ? spaceCount % (words.length - 1) : spaceCount
  for (let i = 0; i < restSpaceLength; i++) {
    restSpace += ' '
  }

  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      ans += interval
    }
    ans += words[i]
  }

  ans += restSpace

  return ans
}


console.log(reorderSpaces(text))
