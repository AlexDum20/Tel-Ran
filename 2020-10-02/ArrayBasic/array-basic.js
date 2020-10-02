let arr = [];    //new Array();

arr[0] = 3;
arr[1] = new Date();
arr[2] = 7;

console.log(arr);

let arr1 = [11,22,33];

console.log(arr1);
console.log(arr1[1]);

console.log(arr.length);

console.log(arr[100500]);
arr[100500] = -1;
console.log(arr.length);
arr[-8] = 111;
arr[2.5] = 333;
arr['natasha'] = 666;
console.log(arr);
