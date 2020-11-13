import {states} from "./data.js";

let makeSelect = arr =>{
    let sel = document.createElement('select');
    sel.size = 20;
    sel.multiple = true;

    sel.innerHTML = arr.map(item => "<option>" + item + "</option>").join("");
    return sel;
};

document.body.appendChild(makeSelect(states));

but.addEventListener('click', () =>
    console.log(
        [...document.querySelector('select').options]
            .reduce((acc, item) => {if(item.selected)acc.push(item.innerText); return acc}, [])
    ));