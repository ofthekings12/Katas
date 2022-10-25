
/* Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma.*/


const repeatNumbers = function (data) {
  let values = [];
  let string = "";
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i][1]; j++) {
      string += data[i][0];
    }
    values.push(string);
    string = "";
  }

  return values.join(", ");
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);

/* -----
EXPECTED OUTPUT

1111111111
11, 222
10101010, 343434343434, 9292

------ */
