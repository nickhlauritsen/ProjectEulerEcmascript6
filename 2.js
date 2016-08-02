/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/


/*
* Tail recursion
*/

function fibIterRecursive(n, a, b){
  if (n === 0) {
    return b;
  } else {
    return fibIterRecursive(n-1, a + b, a);
  }
};

function fib(n){
  return fibIterRecursive(n, 1, 0);
}

const allTermsUnder4Million = () => {
  const MAX = 4000000;

  var res = [];
  for (let i = 1; fib(i) <= MAX; i++) {
    res.push(fib(i));
  }
  return res;
}

const evenValuedTermsUnder4Million = allTermsUnder4Million().filter(x => x%2 == 0)
                                                            .reduce((x,y) => x+y);

console.log(evenValuedTermsUnder4Million);