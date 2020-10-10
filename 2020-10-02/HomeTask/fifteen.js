// create wrap
let wrap = document.createElement('div');
wrap.classList.add("main");

//create modal window
let modal = document.createElement('div');
modal.id = "my_modal";
modal.classList.add("modal");
let submodal = document.createElement('div');
submodal.classList.add("modal_content");
let span = document.createElement('span');
span.classList.add("close_modal_window");
span.innerText = "×";
let p = document.createElement('p');
p.innerText = "Вы выиграли!";
submodal.appendChild(span);
submodal.appendChild(p);
modal.appendChild(submodal);


// create cells
cells = [];
for (let i = 1; i <= 15; i++) {
    let cell = document.createElement('div');
    cell.classList.add("section");
    cell.classList.add("full");
    cell.innerText = i;
    wrap.appendChild(cell);
    cells.push(cell);
}
// create empty cell
sixteen = document.createElement('div');
sixteen.classList.add("section");
sixteen.classList.add("empty");
wrap.appendChild(sixteen);
cells.push(sixteen);

//creating a random set of numbers
shuffle(cells);

for (i = 0; i < 16; i++) {
    cells[i].row = ~~(i / 4);
    cells[i].column = i % 4;
    cells[i].style.top = 100 * cells[i].row + 'px';
    cells[i].style.left = 100 * cells[i].column + 'px';

    cells[i].addEventListener("click", function () {
        if (neighbour(this)) {
            moving(this);
            if(victory()){
                modalStart();
            }
        }
    })
}

document.body.appendChild(wrap);
document.body.appendChild(modal);

function shuffle(arr) {
    for (let bound = arr.length; bound > 1;) {
        let index = ~~((bound--) * Math.random());
        [arr[index], arr[bound]] = [arr[bound], arr[index]];
    }
}

// move to an empty cell
function moving(cell) {
    [cell.row, sixteen.row] = [sixteen.row, cell.row];
    [cell.column, sixteen.column] = [sixteen.column, cell.column];
    [cell.style.top, sixteen.style.top] = [sixteen.style.top, cell.style.top];
    [cell.style.left, sixteen.style.left] = [sixteen.style.left, cell.style.left];
    let cellIndex = cell.row * 4 +cell.column;
    let sixteenIndex = sixteen.row * 4 + sixteen.column;
    [cells[cellIndex],cells[sixteenIndex]]=[cells[sixteenIndex], cells[cellIndex]];
}

//checking neighboring cells for emptiness
function neighbour(cell) {
    return (cell.row === sixteen.row && Math.abs(cell.column - sixteen.column) == 1) ||
        (cell.column === sixteen.column && Math.abs(cell.row - sixteen.row) == 1);
}

function victory(){
    for (let i = 0; i<15; i++){
        if(cells[i].innerText!= i+1){
            return false;
        }
    }
    return true;
}

function modalStart(){
    let modal = document.getElementById("my_modal"),
        span = document.getElementsByClassName("close_modal_window")[0];
    modal.style.display = "block";

    span.onclick = function () {
        modal.style.display = "none";
    }

    setTimeout(function (){
        modal.style.display = "none";
    }, 10000)
}