let tbl = document.createElement("table");

let keys = Object.keys(stuff[0]);
// console.log(stuff[0]);
let headers = tbl.insertRow();
for (let i = 0; i < keys.length; i++) {
    let cell = headers.insertCell();
    cell.innerText = toTitlecase(keys[i]);
}

for (let i = 0; i < stuff.length; i++) {
    let row = tbl.insertRow();

    for (let j = 0; j < keys.length; j++) {
        let cell = row.insertCell();

        if (keys[j] == 'married') cell.innerText = stuff[i].married ? '+' : '-';
        else if (keys[j] == 'gender') {
           stuff[i].gender === "Female" ? cell.innerText = "F" : cell.innerText = "M";
        } else cell.innerText = stuff[i][keys[j]];       // the heart of the code !!!!
    }
}


document.querySelector('.card').appendChild(tbl);

function toTitlecase(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase();
}
