/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

const isPrime = (n) => {
  const m = Math.sqrt(n);
  for(let i=2; i<=m; i++) {
    if(n%i==0) return false;
  }
  return true;
}

const N = 10001;

let currentPrime = 1;
let i=2;
while(currentPrime<=N) {
  if(isPrime(i)) {
    console.log(i + " is the " + currentPrime + " prime number");
    currentPrime++;
  }
  i++;
}
