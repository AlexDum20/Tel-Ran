let makeSelect = arr =>{
    let sel = document.createElement('select');
    sel.value = "-";
    sel.innerHTML = arr.map(item => "<option>" + item + "</option>").join("");
    return sel;
}

document.body.appendChild(makeSelect(["---", "Paris", "London", "Roma", "Madrid"]));