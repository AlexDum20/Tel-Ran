import {course, gender} from "./listParametrs.js";

let list = [gender, course];
let table = document.createElement("table");
let row = table.insertRow();
let cell = row.insertCell();



//create title HEAD
let wrap = document.createElement("div");
let titleHead = document.createElement("span");
titleHead.classList.add("titleHead");
titleHead.innerText = "Please, fill the form!";

//input text
export let firstName = document.createElement("input");
firstName.classList.add("inp");

let titleFirstName = document.createElement("span");
titleFirstName.classList.add("title");
titleFirstName.innerText = "First Name";
addRow(firstName,titleFirstName);

export let lastName = document.createElement("input");
lastName.classList.add("inp");
let titleLastName = document.createElement("span");
titleLastName.classList.add("title");
titleLastName.innerText = "Last Name";
addRow(lastName,titleLastName);


//create input radiobutton and checkbox
list.forEach((item) => {
    let titleRow = document.createElement("span");
    titleRow.innerText = item[0];
    titleRow.classList.add('titleBut');
    addRow('',titleRow);
    item[2].forEach((_item) => {
        let element = document.createElement("input");
        element.type = item[1];
        element.value = _item;
        element.classList.add('but');
        if (item[1] == "radio") {
            element.name = item[0];
        }
        addRow(element,_item);
    })
});

//create buttons
let pend = document.createElement("p");
pend.classList.add("numButton");

export let submit = document.createElement("button");
submit.textContent = "Submit";
submit.setAttribute("butName", "");

export let reset = document.createElement("button");
reset.textContent = "Reset";

//create HTML
export function authPanel() {

    wrap.appendChild(titleHead);
    wrap.appendChild(table);
    pend.appendChild(submit);
    pend.appendChild(reset);
    wrap.appendChild(pend);

    return wrap
}

function addRow(...args){
    row = table.insertRow();
    args.forEach((arg)=>{
        cell = row.insertCell();
        if (typeof(arg)=='object'){cell.appendChild(arg);}
        else {cell.innerText = arg;}
    });
}
