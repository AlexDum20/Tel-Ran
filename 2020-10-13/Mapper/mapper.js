import {randomCar} from "../../2020-10-09/RandomCarTable/RandomCarTable/JS/car.js";

let arr = [9,1,8,2,7,3,6,4,5];

let result = arr.map(item => item*item);
console.log(result);

let garage = (nCars)=> [...new Array(nCars).keys()]
    .map(()=>randomCar())
    //.map(car => car.engine)
    //.filter(engine => engine > 1.5 && engine < 2.)
    //.map(engine => engine.toFixed(2));
    .map(car => {car.ac = false; return car;})

console.log(garage(7));


