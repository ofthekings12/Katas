/* Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0. */

const conditionalSum = function(values, condition) {
  let sum = 0;

  if (condition === 'even') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        sum += values[i];
      }
    }
  } else if (condition === 'odd') {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 1) {
        sum += values[i]
      }
    }
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));

/* ---
EXPECTED OUTPUT

6
9
144
0 
--- */