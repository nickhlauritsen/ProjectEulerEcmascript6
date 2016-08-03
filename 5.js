/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const gcd = (a, b) => {
  if (!b) return a; else return gcd(b, a % b);
}

const lcm = (a, b) => a*b / gcd(a,b);

const lcmN = (n) => {
  let result = n[0];
  for(let x=1; x<n.length; x++) {
    result = lcm(result, n[x]);
  }
  return result;
}

console.log(lcmN([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]));
