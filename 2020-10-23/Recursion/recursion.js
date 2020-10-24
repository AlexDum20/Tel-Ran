/*function factorial (n){
    return n == 0 ? 1 : n*factorial(n-1);
}*/

/*
const foo = function factorial(n){return n == 0 ? 1 : n*factorial(n-1);}
console.log(foo(10));
 */

const factorial = (n)=> n == 0 ? 1 : n*factorial(n-1);
console.log(factorial(10))
