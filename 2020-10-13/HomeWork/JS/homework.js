import {data} from "./data.js";

let divSecond = document.querySelector("[divName='second']")


let sel = document.createElement('select');
sel.size = "4";
sel.innerHTML = data.map(item => "<option>" + item['title'] + "</option>").join("");
sel.classList.add('closed');
divSecond.appendChild(sel);


let name = document.querySelector("[spName='first']");
let row = [...document.querySelector('select').options]
row.forEach((item) => {
    item.addEventListener('click', (e) => name.innerText = e.target.innerText);
});

let show = document.querySelector("[butName='push']");
show.addEventListener('click', () => console.log(
    [...data].reduce((frend, item) => item["title"] == name.innerText ? frend = item['value'] : frend, "no choice"))
);

let closed = true;
let upDown = document.querySelector("[spName='second']");
upDown.innerText = "\u25bc";
upDown.addEventListener('click', () => {
    closed ? (sel.classList.remove('closed'),upDown.innerText = "\u25b2") :
        (sel.classList.add('closed'),upDown.innerText = "\u25bc");
    closed = !closed;
})