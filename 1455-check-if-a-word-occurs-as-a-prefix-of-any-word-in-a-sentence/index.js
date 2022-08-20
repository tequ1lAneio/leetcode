/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

let sentence, searchWord
sentence = 'i love eating burger', searchWord = 'burg'

const isPrefix = (sentence, start, end, searchWord) => {
  for (let i = 0; i < searchWord.length; i++) {
    if (start + i > end || sentence[start + i] !== searchWord[i]) {
      return false
    }
  }
  return true
}

const isPrefixOfWord = function(sentence, searchWord) {
  const n = sentence.length
  let start = 0
  let end = 0
  let index = 1

  while (start < sentence.length) {
    while (end < n && sentence[end] !== ' ') {
      end++
    }

    if (isPrefix(sentence, start, end, searchWord)) {
      return index
    }

    index++
    end++
    start =  end
  }

  return -1
};

console.log(isPrefixOfWord(sentence, searchWord))
