/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */

let seats, students
seats = [3,1,5], students = [2,7,4]
seats = [4,1,5,9], students = [1,3,2,6]
seats = [2,2,6,6], students = [1,3,2,6]

const minMovesToSeat = (seats, students) => {
  seats.sort((a, b) => a - b)
  students.sort((a, b) => a - b)

  let ans = 0

  for (let i = 0; i < seats.length; i++) {
    ans += Math.abs(seats[i] - students[i])
  }

  return ans
}

console.log(minMovesToSeat(seats, students))