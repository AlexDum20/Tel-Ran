let names = ['sasha', 'Masha', 'dasha', 'glasha', 'natasha'];
names.sort();
console.log(names);

let numberComparator = (num1, num2) => num1 == num2 ? 0 : (num1 > num2 ? 1 : -1);

let numbers = [9,1,8,2,7,3,0,6,4,5,10];
numbers.sort(numberComparator);
console.log(numbers);
