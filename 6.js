/*
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const N = 10;

//Formula: The Sum Of the First N Squares
//(N * (N + 1) * (2N + 1)) / 6
const sumOfSquares = (N * (N + 1) * (2*N + 1)) / 6;

//Formula: The sum of N natural numbers to the power of two
//N * (N + 1) / 2
const squareOfSum = Math.pow((N * (N + 1) / 2), 2);

console.log(squareOfSum + " - " + sumOfSquares + " = " + (squareOfSum-sumOfSquares));
