/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

const isPrime = (n) => {
  const m = Math.sqrt(n);
  for(let i=2; i<=m; i++) {
    if(n%i==0) return false;
  }
  return true;
}

const largestPrimeFactorOfN = (n) => {
  for(let i=Math.floor(Math.sqrt(n)); i>1; i--) {
    if(n%i==0 && isPrime(i)) {
      return i;
    }
  }
  return null;
}

console.log(largestPrimeFactorOfN(600851475143));
