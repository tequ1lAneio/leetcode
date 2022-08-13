/**
 * @param {string} equation
 * @return {string}
 */

// const equation = 'x+5-3+x=6+x-2000'
const equation = '0x=0'

const isDigit = s => !isNaN(parseFloat(s))

const solveEquation = function(equation) {
  const n = equation.length
  let factor = 0
  let value = 0
  let i = 0
  let sign = 1

  while (i < n) {
    let currentSign = sign
    let number = 0
    let numberUpdated = false

    if (equation[i] === '=') {
      sign = -1
      i++
      continue
    }

    if (equation[i] === '+') {
      currentSign = sign
      i++
    }

    if (equation[i] === '-') {
      currentSign = -sign
      i++
    }

    while (i < n && isDigit(equation[i])) {
      number = 10 * number + (equation[i].charCodeAt(0) - '0'.charCodeAt(0))
      i++
      numberUpdated = true
    }

    if (i < n && equation[i] === 'x') {
      if (numberUpdated) {
        factor += currentSign * number
      } else {
        factor += currentSign
      }
      i++
    } else {
      value += currentSign * number
    }
  }


  if (factor === 0) {
    if (value === 0) {
      return 'Infinite solutions'
    } else {
      return 'No solution'
    }
  }

  return `x=${-value / factor}`
}


console.log(solveEquation(equation))
