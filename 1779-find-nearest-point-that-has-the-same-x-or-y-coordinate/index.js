/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */

let x, y, points
x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
x = 3, y = 4, points = [[3,4]]
x = 3, y = 4, points = [[2,3]]

const nearestValidPoint = function(x, y, points) {
  let n = points.length
  let min = Number.MAX_SAFE_INTEGER
  let nearest = -1

  for (let i = 0; i < n; i++) {
    const px = points[i][0]
    const py = points[i][1]
    let distance = 0
    if (x === px) {
      distance = Math.abs(py - y)
      if (min > distance) {
        min = distance
        nearest = i
      }
    } else if (y === py) {
      distance = Math.abs(px - x)
      if (min > distance) {
        min = distance
        nearest = i
      }
    }
  }

  return nearest
}

console.log(nearestValidPoint(x, y, points))
