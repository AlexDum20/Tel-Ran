import {garage, } from "../../Additions/RandomCar/JS/car.js";

let listCar = garage(10);

const up = String.fromCharCode(8593);
const down = String.fromCharCode(8595);
let isSort = -1;

let tbl = document.createElement("table");

let keys = Object.keys(listCar[0]);
let headers = tbl.insertRow();
const _headers = [];
const direction = [1, 1, 1, 1];
for (let i = 0; i < keys.length; i++) {
    let cell = headers.insertCell();
    _headers.push(keys[i]);
    if (keys[i] == 'ac') cell.innerText = 'AC';
    else cell.innerText = toTitlecase(keys[i]);

    cell.addEventListener('click', () => {
        let i = cell.cellIndex;
        let n = direction[i];
        direction[i] = -n;
        let addArrow = document.children[0].children[1].children[0].children[0].children[0].children[0];
        if (isSort>=0){
            addArrow.cells[isSort].innerText = addArrow.cells[isSort].innerText.slice(0, -2);
        }
        isSort = i;
        addArrow.cells[i].innerText = addArrow.cells[i].innerText + ' ' + arrow(n);

        let comparator = (car1, car2) => {
            let name1 = car1[_headers[i]];
            let name2 = car2[_headers[i]];
            return name1 == name2 ? 0 : (name1 > name2 ? n : -n);
        }
        listCar.sort(comparator);

        let table_Body = document.querySelectorAll('tr');
        table_Body.forEach((item, index) => {
            if (index != 0) {
                item.remove();
            }
        })
        tableCar();
    })
}


tableCar();


document.querySelector('.card').appendChild(tbl);

function tableCar() {
    for (let i = 0; i < listCar.length; i++) {
        let row = tbl.insertRow();

        for (let j = 0; j < keys.length; j++) {
            let cell = row.insertCell();
            if (keys[j] == 'ac') cell.innerText = listCar[i].ac ? '+' : '-';
            else cell.innerText = listCar[i][keys[j]];
        }
    }
}

function arrow(n){
    if (n > 0) return down;
    return up;
}

function toTitlecase(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

