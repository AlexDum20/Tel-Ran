let wrap = document.createElement('div');
wrap.classList.add("main");
wrap.classList.add("centered");

cells = [];
for (let i = 1; i <= 15; i++) {
    cell = document.createElement('div');
    cell.classList.add("section");
    cell.classList.add("full");
    cell.innerText = i;
    wrap.appendChild(cell);
    cells.push(cell);
}

sixteen = document.createElement('div');
sixteen.classList.add("section");
sixteen.classList.add("empty");
wrap.appendChild(sixteen);
cells.push(sixteen);
console.log('before - ', cells);
shuffle(cells);
console.log('after - ', cells);
for (i = 0; i < 16; i++) {
    cells[i].row = ~~(i/4);
    cells[i].column = i%4;
    cells[i].style.top = 100 * cells[i].row + 'px';
    cells[i].style.left = 100 * cells[i].column + 'px';
}

console.dir(wrap);
document.body.appendChild(wrap);

function shuffle(arr) {
    for (let bound = arr.length; bound > 1;) {
        let index = ~~((bound--) * Math.random());
        [arr[index], arr[bound]] = [arr[bound], arr[index]];
    }
}