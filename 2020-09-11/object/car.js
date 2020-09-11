let car = {
    model: 'Zhiguli',
    year: 1978,
    engine: 1.1,
    ac: false
};

console.log(car);
console.log(car.engine);
console.log(car.owner);

car.year = 2008;
car.owner = 'Vasya';
delete car.ac
console.log(car);

let field = 'model';
let x = 'ye';
let y = 'ar';

console.log(car[field]);
console.log(car[x+y]);