/* Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill. Return a new object that describes the total amount of change for the cashier to give back. Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill, don't include it in the results. 

We will be given two numbers, the total of a transaction, and the amount of cash given to the cashier. Both of these numbers will be represented as whole numbers in cents. Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which describes the total amount of change for the cashier to give back. Although pennies are not used in circulation, we will still calculate the amount of pennies to give back.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢)*/

const calculateChange = function(total, cash) {
  const coinOwed = {};
  let moneyOwed = (cash - total);
  while (moneyOwed > 0) {
    if (moneyOwed >= 2000) {
      coinOwed.twentyDollars = coinOwed.twentyDollars + 1 || 1;
      moneyOwed -= 2000;
    } else if (moneyOwed >= 1000) {
      coinOwed.tenDollars = coinOwed.tenDollars + 1 || 1; 
      moneyOwed -= 1000;
    } else if (moneyOwed >= 500) {
      coinOwed.fiveDollars = coinOwed.fiveDollars + 1 || 1;
      moneyOwed -= 500;
    } else if (moneyOwed >= 200) {
      coinOwed.twoDollars = coinOwed.twoDollars + 1 || 1;
      moneyOwed -= 200;
    } else if (moneyOwed >= 100) {
      coinOwed.oneDollar = coinOwed.oneDollar + 1 || 1;
      moneyOwed -= 100;
    } else if (moneyOwed >= 25) {
      coinOwed.quarter = coinOwed.quarter + 1 || 1;
      moneyOwed -= 25;
    } else if (moneyOwed >= 10) {
      coinOwed.dime = coinOwed.dime + 1 || 1;
      moneyOwed -= 10;
    } else if (moneyOwed >= 5) {
      coinOwed.nickel = coinOwed.nickel + 1 || 1;
      moneyOwed -= 5;
    } else {
      coinOwed.penny = coinOwed.penny + 1 || 1; 
      moneyOwed -= 1; 
    }
  }
  return coinOwed;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/* EXPECTED OUTPUT

{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/