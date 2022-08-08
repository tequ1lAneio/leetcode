/**
 * @param {string} s
 * @return {string}
 */

const makeLargestSpecial = function(s) {
  if (s.length <= 2) {
    return s
  }

  let count = 0
  let left = 0

  const substrings = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '1') {
      count++
    } else {
      count--
      if (count === 0) {
        substrings.push(`1${makeLargestSpecial(s.substring(left + 1, i))}0`)
        left = i + 1
      }
    }
  }

  substrings.sort().reverse()
  return substrings.join('')
};

const s = "11011000"
console.log(makeLargestSpecial(s))


//
// var makeLargestSpecial = function(s) {
//   if (s.length <= 2) {
//     return s;
//   }
//   let cnt = 0, left = 0;
//   const subs = [];
//   for (let i = 0; i < s.length; ++i) {
//     if (s[i] === '1') {
//       ++cnt;
//     } else {
//       --cnt;
//       if (cnt === 0) {
//         subs.push("1" + makeLargestSpecial(s.substring(left + 1, i)) + '0');
//         left = i + 1;
//       }
//     }
//   }
//
//   subs.sort().reverse();
//   return subs.join('');
// };



