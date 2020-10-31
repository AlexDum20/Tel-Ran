import {garage} from "../../Additions/RandomCar/JS/car.js";

let listCar = garage(10);

const up = String.fromCharCode(8593);
const down = String.fromCharCode(8595);

let tbl = document.createElement("table");

let keys = Object.keys(listCar[0]);
let headers = tbl.insertRow();
for (let i = 0; i < keys.length; i++) {
    let cell = headers.insertCell();
    keys[i] == 'ac' ? cell.innerText = 'AC' : cell.innerText = toTitlecase(keys[i]);
    let upDown = document.createElement('span');
    upDown.classList.add('closed');
    upDown.innerText = down;
    cell.appendChild(upDown);

    cell.addEventListener('click', () => {
        let n = upDown.innerText == down ? 1 : -1;
        document.querySelectorAll('span').forEach((item) =>
            item.classList.add('closed'));
        upDown.innerText = arrow(n);
        upDown.classList.remove('closed');

        let comparator = (car1, car2) => {
            let name1 = car1[keys[cell.cellIndex]];
            let name2 = car2[keys[cell.cellIndex]];
            return name1 == name2 ? 0 : (name1 > name2 ? n : -n);
        }
        listCar.sort(comparator);

        let table_Body = document.querySelectorAll('tr');
        table_Body.forEach((item, index) =>
            index != 0 ? item.remove() : '');
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

const arrow = (n) => n > 0 ? up : down;

function toTitlecase(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}

