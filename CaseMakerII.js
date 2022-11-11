/* Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options */

const makeCase = function(input, caseStyle) {
  let newStr = "";

  if (caseStyle === "camel") {
    let wordArr = input.split(' ');
    for (let i = 0; i < wordArr.length; i++) {
      if (i > 0) {
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      } else {
        newStr += wordArr[i]
      }
    }
  } else if (caseStyle === "pascal") {
    let wordArr = input.split(' ');
    for (let i = 0; i < wordArr.length; i++) {
      newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
    }
    return newStr;

  } else if (caseStyle === "snake") {
    let wordArr = input.split(' ');
    let snakeArr = wordArr.join('_');

    return snakeArr;

  }
  return newStr;




}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/* EXPECTED OUTPUT

thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING

*/