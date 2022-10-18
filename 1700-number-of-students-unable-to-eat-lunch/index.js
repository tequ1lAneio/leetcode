const _ = require('lodash')
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

let students, sandwiches
students = [1,1,0,0], sandwiches = [0,1,0,1]
students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]

const countStudents = (students, sandwiches) => {
  let restOfLike = _.sum(students)
  let restOfDislike = students.length - restOfLike

  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === 1 && restOfLike > 0) {
      restOfLike--
    } else if (sandwiches[i] === 0 && restOfDislike > 0) {
      restOfDislike--
    } else {
      break
    }
  }

  return restOfLike + restOfDislike
}

console.log(countStudents(students, sandwiches))
