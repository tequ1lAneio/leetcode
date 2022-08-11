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

// var solveEquation = function(equation) {
//   let factor = 0, val = 0;
//   let index = 0, n = equation.length, sign1 = 1; // 等式左边默认系数为正
//   while (index < n) {
//     if (equation[index] === '=') {
//       sign1 = -1; // 等式右边默认系数为负
//       index++;
//       continue;
//     }
//
//     let sign2 = sign1, number = 0;
//     let valid = false; // 记录 number 是否有效
//     if (equation[index] === '-' || equation[index] === '+') { // 去掉前面的符号
//       sign2 = (equation[index] === '-') ? -sign1 : sign1;
//       index++;
//     }
//     while (index < n && isDigit(equation[index])) {
//       number = number * 10 + (equation[index].charCodeAt() - '0'.charCodeAt());
//       index++;
//       valid = true;
//     }
//
//     if (index < n && equation[index] === 'x') { // 变量
//       factor += valid ? sign2 * number : sign2;
//       index++;
//     } else { // 数值
//       val += sign2 * number;
//     }
//   }
//
//   if (factor === 0) {
//     return val === 0 ? "Infinite solutions" : "No solution";
//   }
//   return "x=" + (-val / factor);
// };


console.log(solveEquation(equation))
