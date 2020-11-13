import {data} from "../Context/context.js";

export const makeMenu = (container,changeContent) =>{
    let tbl = document.createElement('table');

    for (let i = 0; i<2;i++){
            let row = tbl.insertRow();
            for (let j=0; j<5;j++){
                let cell = row.insertCell();
                cell.innerText = data[j + i*5].name;
                cell.starIndex = j + i*5;
                cell.classList.add('cell');
                cell.addEventListener('click', (e)=>{
                    changeContent(e.target.starIndex);
                })
            };
    }
    container.appendChild(tbl);
}