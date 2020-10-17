import {carProperties} from "../../2020-10-09/RandomCarTable/RandomCarTable/JS/car";

let arr = [5,6,3,7,3,9,2,0,1];

let sum = arr.reduce((state, item)=> state + item, 0);
console.log(sum);

let factorial = (n) => [...new Array(n).keys()].map(item => item + 1)
                        .reduce((state, item) => state*item, 1);

console.log(factorial(10));

let tbl = document.createElement("table");
let row = tbl.insertRow();
row.innerHTML = carProperties.map(property => "<td>" + property.displayed_name + "</td>")
console.log(row.innerHTML);