/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

let pushed, popped
pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
pushed = [1,2,3,4,5], popped = [4,3,5,1,2]

const validateStackSequences = (pushed, popped) => {
  const stack = []

  for (let i = 0, j = 0; i < pushed.length; i++) {
    stack.push(pushed[i])

    while (stack.length && popped[j] === stack[stack.length - 1]) {
      stack.pop()
      j++
    }
  }

  return stack.length === 0
}

console.log(validateStackSequences(pushed, popped))
