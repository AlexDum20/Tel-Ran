let arr = [3, 5, -9, 11, 0,-2, 4];
console.log(arr);

/*let result = [];
arr.forEach(item => {if(item > 0)result.push(item)});
console.log(result);*/

let result = arr.filter(item => item > 0);
console.log(result);

let result1 = arr.filter((item, index, arr)=> index == 0 || index == arr.length - 1 || item < 0);
console.log(result1);

let isPrime = n => {
    if (n < 1) return false;
    if (n < 4) return true;
    if (n%2 == 0) return false;
    for (let i = 3; i*i <= n; i = i + 2){
        if (n%i == 0) return false;
    }
    return true;
}

console.log([...(new Array(51).keys())].filter(n => isPrime(n)));

console.log(arr.find(x => x  > 10));
console.log(arr.find(x => isPrime(-x)));
// garage.find(car => car.color == 'yellow')
console.log(arr.findIndex(x => x  > 10));
console.log(arr.findIndex(x => isPrime(-x)));

console.log(arr.some(x => x%7 == 0 && x != 0));
console.log(arr.every(x => x < 20));

console.log([].some(x => x > 0));
console.log([].every(x => x > 0));


