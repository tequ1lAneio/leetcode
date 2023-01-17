/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */

let sentence1, sentence2
sentence1 = "My name is Haley", sentence2 = "My Haley"
sentence1 = "of", sentence2 = "A lot of words"
// sentence1 = "Eating right now", sentence2 = "Eating"
// sentence1 = "Luky", sentence2 = "Lucccky"

const areSentencesSimilar = (sentence1, sentence2) => {
  const words1 = sentence1.split(' ')
  const words2 = sentence2.split(' ')
  let i = 0
  let j = 0

  while (i < words1.length && i < words2.length && words1[i] === words2[i]) {
    i++
  }

  while (j < words1.length - i && j < words2.length - i && words1[words1.length - j - 1] === words2[words2.length - j - 1]) {
    j++
  }

  return i + j === Math.min(words1.length, words2.length)
}

console.log(areSentencesSimilar(sentence1, sentence2))
