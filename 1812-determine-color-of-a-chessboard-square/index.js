/**
 * @param {string} coordinates
 * @return {boolean}
 */

let coordinates
coordinates = "a1"
// coordinates = "h3"
// coordinates = "c7"

const squareIsWhite = (coordinates) => {
  return (coordinates[0].charCodeAt() - 'a'.charCodeAt() + 1) % 2 + (coordinates[1].charCodeAt() - '0'.charCodeAt()) % 2 === 1
}

console.log(squareIsWhite(coordinates))
