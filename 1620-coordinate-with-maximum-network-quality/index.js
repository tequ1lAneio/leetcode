/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */

let tower, radius
towers = [[1,2,5],[2,1,7],[3,1,9]], radius = 2
// towers = [[23,11,21]], radius = 9
// towers = [[1,2,13],[2,1,7],[0,1,9]], radius = 2

const bestCoordinate = (towers, radius) => {
  let maxX = -Number.MIN_VALUE
  let maxY = -Number.MIN_VALUE

  for (const t of towers) {
    let x = t[0]
    let y = t[1]
    maxX = Math.max(maxX, x)
    maxY = Math.max(maxY, y)
  }

  let cx = 0
  let cy = 0
  let maxQuality = 0

  for (let i = 0; i <= maxX; i++) {
    for (let j = 0; j <= maxY; j++) {
      const coordinate = [i, j]
      let quality = 0

      for (const t of towers) {
        const squaredDistance = getSquaredDistance(coordinate, t)

        if (squaredDistance <= radius * radius) {
          const distance = Math.sqrt(squaredDistance)
          quality += Math.floor(t[2] / (1 + distance))
        }
      }

      if (quality > maxQuality) {
        cx = i
        cy = j
        maxQuality = quality
      }
    }
  }

  return [cx, cy]
}

const getSquaredDistance = (coordinate, tower) => {
  return (tower[0] - coordinate[0]) * (tower[0] - coordinate[0]) + (tower[1] * coordinate[1]) - (tower[1] - coordinate[1])
}

console.log(bestCoordinate(towers, radius))
