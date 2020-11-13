import {makeSelect} from "./root.js";

let calculate = (data, col, cur1, cur2) => (col * data[cur2] / data[cur1]).toFixed(2);

export let makeHeader = (data, arr) => {
    const header = document.querySelector('[header]');
    let title = document.createElement('div');
    title.innerText = 'Currency service';
    title.style.color = 'blue';
    title.style.fontSize = '3.5vmin';
    title.style.marginTop = '2vh';
    header.appendChild(title);

    let count = document.createElement('div');
    header.appendChild(count);
    let currInp1 = makeInput(false);
    count.appendChild(currInp1);
    let curr1 = makeSelect([...Object.keys(data)], false);
    count.appendChild(curr1);
    let text = document.createElement('span');
    text.innerText = 'equals to';
    count.appendChild(text);
    let currInp2 = makeInput(true);
    count.appendChild(currInp2);
    let curr2 = makeSelect([...Object.keys(data)], false);
    count.appendChild(curr2);

    curr1.addEventListener('change', () =>
        currInp2.value = calculate(data, currInp1.value, curr1.value, curr2.value));
    curr2.addEventListener('change', () =>
        currInp2.value = calculate(data, currInp1.value, curr1.value, curr2.value));
    currInp1.addEventListener('change', (item) =>
        currInp2.value = calculate(data, item.target.value, curr1.value, curr2.value));
}

let makeInput = (disabled) => {
    let inp = document.createElement('input');
    inp.value = Number(1).toFixed(2);
    inp.type = 'number';
    inp.style.border = 'none';
    disabled ? inp.disabled = disabled :
        (inp.style.borderBottom = '0.15vh solid blue',inp.setAttribute('inpName','input'));
    return inp;
}

