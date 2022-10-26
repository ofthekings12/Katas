/* Create a function named camelCase that will convert a string to camel case, and return the result. */

const camelCase = function(input) {
  let newStr = "";
  if (input) {
    let wordArr = input.split(' ');
    console.log('here', wordArr)
    for (let i = 0; i < wordArr.length; i++) {
      if (i > 0) {
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      } else {
        newStr += wordArr[i]
      }
    }
  } else {
    return newStr;
  }
  return newStr;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/* EXPECTED OUTPUT

thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious

*/