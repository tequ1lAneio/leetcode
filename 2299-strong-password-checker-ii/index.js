/**
 * @param {string} password
 * @return {boolean}
 */

let password
password = "IloveLe3tcode!"
password = "Me+You--IsMyDream"
password = "1aB!"

const strongPasswordCheckerII = function(password) {
  const n = password.length;

  if (n < 8) {
    return false;
  }

  const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+'];
  const set = new Set(symbols);

  let hasLowerCases = false;
  let hasUpperCases = false;
  let hasDigits = false;
  let hasSymbols = false;

  for (let i = 0; i < n; i++) {
    const char = password[i];

    if (i !== 0 && char === password[i - 1]) {
      return false;
    }

    if (isDigit(char)) {
      hasDigits = true;
    }

    if (isLowerCase(char)) {
      hasLowerCases = true;
    }

    if (isUpperCase(char)) {
      hasUpperCases = true;
    }

    if (set.has(char)) {
      hasSymbols = true;
    }
  }

  return hasLowerCases && hasUpperCases && hasDigits && hasSymbols;
};

const isDigit = (char) => parseFloat(char).toString() !== "NaN";
const isLowerCase = (char) => 'a' <= char && 'z' >= char;
const isUpperCase = (char) => 'A' <= char && 'Z' >= char;

console.log(strongPasswordCheckerII(password))
