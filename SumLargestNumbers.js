/* Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array. */

const sumLargestNumbers = function (data) {
  let firstLargest = 0;
  let secondLargest = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = data[i];
    } else if (data[i] > secondLargest) {
      secondLargest = data[i]
    }
  }
  return firstLargest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

/* ---
EXPECTED OUTPUT
11
5
126
--- */
