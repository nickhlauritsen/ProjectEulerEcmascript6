/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrom = n => (n == ('' + n).split('').reverse().join(''))

const res = [];
for(let x=100; x<1000; x++) {
  for(let y=100; y<1000; y++) {
      const n = x*y;
      if(isPalindrom(n)) {
        res.push(n);
      }
  }
}

console.log(Math.max.apply(null, res));
