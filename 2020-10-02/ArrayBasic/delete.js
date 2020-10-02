let arr = [...new Array(10).keys()];   // trick
console.log(arr);

arr['natasha'] = 333;
console.log(arr);

//delete arr[3];
arr.splice(3,1);
delete arr['natasha'];
console.log(arr);
console.log(arr[3]);
