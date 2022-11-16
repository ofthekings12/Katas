/* Create a function named makeCase that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options */

const makeCase = function (input, caseStyle) {
  let newStr = "";

  if (caseStyle === "camel") { // Camel Case Style
    let wordArr = input.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
      if (i > 0) {
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      } else {
        newStr += wordArr[i];
      }
    }

  } else if (caseStyle === "pascal") { // Pascal Case Style
    let wordArr = input.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
      newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
    }
    return newStr;

  } else if (caseStyle === "snake") { // "Snake Case Style"
    let wordArr = input.split(" ");
    let newStr = wordArr.join("_");

    return newStr;

  } else if (caseStyle === "kebab") { // Kebab Case Style
    let wordArr = input.split(" ");
    let newStr = wordArr.join("-");
    return newStr;


  } else if (caseStyle === "title") { // Title Case Style
    let wordArr = input.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
      newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1) + " ";
    }
    return newStr;


  } else if (caseStyle === "vowel") { // Vowel Case Style
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (
          input[i] === "a" ||
          input[i] === "e" ||
          input[i] === "i" ||
          input[i] === "o" ||
          input[i] === "u"
          
        ) {
          newStr += input[i].toUpperCase();
        } else {
          newStr += input[i].toLowerCase();
        }
      }
    }
    return newStr;

  } else if (caseStyle === "consonant") { // Consonant Case Style
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (
          !input[i] === "a" ||
          !input[i] === "e" ||
          !input[i] === "i" ||
          !input[i] === "o" ||
          !input[i] === "u"
        ) {
          newStr += input[i].toUpperCase();
        } else {
          newStr += input[i].toLowerCase();
        }
      }
    }
    return newStr;
  }
};


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
