import {tableContainer} from "./root.js";

export let makeTable = (data, arr) => {
    tableContainer.innerHTML = '';
    if (arr.length > 0) {
        let tbl = document.createElement("table");
        let headers = tbl.insertRow();
        for (let i = -1; i < arr.length; i++) {
            let cell = headers.insertCell();
            i >= 0 ? cell.innerText = arr[i] : '';
            cell.classList.add('cell', 'head');
        }
        arr.forEach((item) => {
            let row = tbl.insertRow();
            for (let j = -1; j < arr.length; j++) {
                let currencyRow = data[item],
                    curencyColumn = data[arr[j]],
                    cell = row.insertCell();
                j >= 0 ? (cell.innerText = (curencyColumn / currencyRow).toFixed(4),
                        item == arr[j] ? cell.style.backgroundColor = 'gainsboro' : '') :
                    (cell.innerText = item, cell.classList.add('head'));
                cell.classList.add('cell');
            }
        })
        tableContainer.appendChild(tbl);
    }
}
