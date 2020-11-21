import {headers, data, markedCars, setMarkedCars, setMode, setCarCurrent, setData} from "../../Context/context.js";
import {removeCar} from "../../HTTP/http-service.js";

export const renderCarTable = (container, renderForm) =>{

    const changeMarkedCars = (inpID) =>{
        console.log(inpID);
        const index = markedCars.indexOf(inpID);
        markedCars.includes(inpID) ? markedCars.splice(index,1):
        markedCars.push(inpID);
        console.log(markedCars);
    }

    container.innerHTML= `
        <table class="car-table-headers">
            <tr tableHead></tr>
        </table>
        <div class="car-table-body-wrap">
            <table class="car-table-body" carTableBody></table>
        </div>
        <div class="car-table-but-bar">
            <button addButton>Add</button>
            <button editButton>Edit</button>
            <button removeButton>Remove</button>
        </div>
        `;
    const tableHead = document.querySelector('[tableHead]');
    const carTableBody = document.querySelector('[carTableBody]');

    tableHead.innerHTML = '<td></td>' + headers.map(item=>'<td>'+item+'</td>').join('');
    carTableBody.innerHTML = data.map(({reg_number,model, year, engine,ac})=>
    `<tr><td><input type="checkbox" inpID = "${reg_number}"></td>
                        <td>${reg_number}</td>
                        <td>${model}</td>
                        <td>${year}</td>
                        <td>${engine}</td>
                        <td>${ac}</td></tr>`).join('');

    carTableBody.querySelectorAll('input').forEach(item =>
    item.addEventListener('change',()=>changeMarkedCars(item.getAttribute('inpID'))));

    const add = () =>{
        setMode('add');
        renderForm();
    }

    const edit = () =>{
        if (markedCars.length===1){
            setMode('edit');
            setCarCurrent(data.find(car => car.reg_number === markedCars[0]));
            renderForm();
        }
    }

    const remove = () =>{
        if (markedCars.length>=1){
            removeCar(markedCars,()=>{
                setData(data.filter(item => !markedCars.includes(item.reg_number)));
                setMarkedCars([]);
                renderCarTable(container,renderForm);
            })

        }
    }

    document.querySelector('[addButton]').addEventListener('click',add);
    document.querySelector('[editButton]').addEventListener('click',edit);
    document.querySelector('[removeButton]').addEventListener('click',remove);

}