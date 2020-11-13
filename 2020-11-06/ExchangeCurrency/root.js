import {makeTable} from "./make-table.js";
import {makeHeader} from "./make-header.js";
// const rates = {};
const url = "https://open.exchangerate-api.com/v6/latest";
const xhr = new XMLHttpRequest();
export const tableContainer = document.querySelector('[table]');
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState != 4) return;
    const data = JSON.parse(xhr.responseText).rates;
    // Object.assign(rates,JSON.parse(xhr.responseText).rates);
    makeHeader(data, [...Object.keys(data)]);
    let selectMult = makeSelect([...Object.keys(data)],true);

    document.querySelector("[divName='select']").appendChild(selectMult);

    const currencyArray = [];
    const currencyHeader = document.querySelector('[currency]');

    [...selectMult.options].forEach((item) => {
        item.addEventListener('click', () => (
            currencyArray.length < 10 && !currencyArray.includes(item.innerText)) ?
            (currencyArray.push(item.innerText),
                currencyHeader.innerText = '[' + currencyArray.join(',') + ']',
                makeTable(data, currencyArray)) :
            '');
    });

    but.addEventListener('click', () =>
        (currencyArray.splice(0,), currencyHeader.innerText = '', makeTable(data, currencyArray)));
})
xhr.open("GET", url);
xhr.send();

export let makeOption = arr => arr.map(item => "<option>" + item + "</option>").join("");

export let makeSelect = (arr,multiple) => {
    let sel = document.createElement('select');
    multiple ? (sel.size = 10,sel.multiple = true):
        (sel.style.border='none',sel.style.backgroundColor = 'gainsboro');
    sel.innerHTML = makeOption(arr);
    return sel;
};
