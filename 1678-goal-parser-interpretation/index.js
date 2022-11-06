/**
 * @param {string} command
 * @return {string}
 */

let command
command = "G()(al)"
command = "G()()()()(al)"
command = "(al)G(al)()()G"

const interpret = function(command) {
  const n = command.length
  let ans = ''

  for (let i = 0; i < n; i++) {
    if (command[i] === 'G') {
      ans += command[i]
    } else if (command[i] === '(') {
      if (command[i + 1] === ')') {
        ans += 'o'
      } else {
        ans += 'al'
      }
    }
  }

  return ans
}

console.log(interpret(command))
