let car = {
    model : 'Ford',
    year : 2010,
    engine : 1.6,
    ac : true
};

let person = {
    name : 'Vasya',
    age : 25
};

console.log(car);
console.log(person);
car.owner = person;
console.log(car);