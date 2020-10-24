import {constructorMaker} from "./constructorMaker.js";

const PersonConstructor = constructorMaker(["name","age","weight","married"]);

const p = new PersonConstructor("Vasia", 32, 85.,true );
console.log(p);

const CarConstructor = constructorMaker(["model","year","engine","ac"]);
const c = new CarConstructor("TAZ", 1983, 1.1, false);
console.log(c);
