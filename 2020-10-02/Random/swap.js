let a = 3;
let b = 5;

console.log(a, b);

/*
// vanilla
let pocket = a;
a = b;
b = pocket;

console.log(a, b);
 */

//ES6
[a,b] = [b,a];                           // destructuring trick!
console.log(a, b);

let p1 = {name: 'Vasia', age: 28};
let p2 = {name: 'Masha', age: 19};

console.log(p1, p2);
[p1,p2] = [p2, p1];
console.log(p1, p2);
