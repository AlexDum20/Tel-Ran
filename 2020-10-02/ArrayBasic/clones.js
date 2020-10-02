let arr1 = [1,2,3];
let arr2 = arr1;

//console.log(arr1);
//console.log(arr2);

arr2[1] = 888;

//console.log(arr1);
//console.log(arr2);

// 3 ways to create a clone

// vanilla
let clone1 = [];
for (let i = 0; i < arr1.length; i++)clone1.push(arr1[i]);

//ES5
let clone2 = arr1.slice();

//ES6
let clone3 = [...arr1];    // destructuring !!!

console.log(arr1);
console.log(clone1);
console.log(clone2);
console.log(clone3);

console.log('***********');
arr1[1] = -33;

console.log(arr1);
console.log(clone1);
console.log(clone2);
console.log(clone3);
