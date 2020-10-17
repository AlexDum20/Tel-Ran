import {course, gender} from "./listParametrs.js";

let list = [gender, course];
let table = document.createElement("table");


//create head
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
let head1 = table.insertRow();
let cell1 = head1.insertCell(), cell2 = head1.insertCell();
cell1.appendChild(firstName);
cell2.appendChild(titleFirstName)

export let lastName = document.createElement("input");
lastName.classList.add("inp");

let titleLastName = document.createElement("span");
titleLastName.classList.add("title");
titleLastName.innerText = "Last Name";
let head2 = table.insertRow();
let cell3 = head2.insertCell(), cell4 = head2.insertCell();
cell3.appendChild(lastName);
cell4.appendChild(titleLastName)


//create input radiobutton and checkbox
list.forEach((item) => {
    let titleRow = document.createElement("span");
    titleRow.innerText = item[0];
    titleRow.classList.add('titleBut');
    let _row = table.insertRow();
    let _cell1 = _row.insertCell();
    let _cell2 = _row.insertCell();
    _cell1.innerText = '';
    _cell2.appendChild(titleRow);
    item[2].forEach((_item) => {
        let element = document.createElement("input");
        element.type = item[1];
        element.value = _item;
        element.classList.add('but');
        if (item[1] == "radio") {
            element.name = item[0];
        }
        let _row1 = table.insertRow();
        let _cell11 = _row1.insertCell();
        let _cell21 = _row1.insertCell();

        _cell11.appendChild(element);
        _cell21.innerText = _item;
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
