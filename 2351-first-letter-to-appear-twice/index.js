/**
 * @param {string} s
 * @return {character}
 */

var repeatedCharacter = function(s) {
  const map = new Map()

  for (const char of s) {
    if (map.get(char)) {
      return char
    }
    map.set(char, true)
  }

  return ''
};
