import {carCurrent, headers, setMarkedCars, mode, data, setCarCurrent} from "../../Context/context.js";
import {Car, MODELS, randomRegNumber} from '../Car/car.js';
import {addCar, editCar} from "../../HTTP/http-service.js";

export const renderCarForm = (container,renderTable) =>{
    container.innerHTML = `
        <div class="car-form-wrap" carForm>
            <label>${headers[0]}: <span class="reg-number"></span></label>
            <label> ${headers[1]}: <select>${MODELS.map(model =>`<option>${model}</option>`).join("")}</select></label>
            <label> ${headers[2]}: <input type="number" /></label>
            <label> ${headers[3]}: <input type="number" /></label>
            <label> ${headers[4]}: <input type="number" /></label>
            <div class="car-form-but-bar">
                <button submitButton>Submit</button>
                <button resetButton>Reset</button>
                <button cancelButton>Cancel</button>
            </div>
        </div>
    `
    const carForm = document.querySelector("[carForm]");

    const startForm = () =>{
        carForm.children[0].firstElementChild.innerText = carCurrent.reg_number ? carCurrent.reg_number : randomRegNumber();
        carForm.children[1].firstElementChild.value = carCurrent.model ? carCurrent.model : '';
        carForm.children[2].firstElementChild.value = carCurrent.year ? carCurrent.year : '';
        carForm.children[3].firstElementChild.value = carCurrent.engine ? carCurrent.engine : '';
        carForm.children[4].firstElementChild.value = carCurrent.ac ? carCurrent.ac : '';
    }

    startForm();

    const makeCar = () => new Car(
        carForm.children[0].firstElementChild.innerText,
        carForm.children[1].firstElementChild.value,
        carForm.children[2].firstElementChild.value,
        carForm.children[3].firstElementChild.value,
        carForm.children[4].firstElementChild.value
    )

    const submit = () =>{
        const car = makeCar();
        if (mode ==='add') addCar(car,()=>{
                setMarkedCars([]);
                data.unshift(car);
                renderTable();
            })
        else editCar(car,()=>{
                data[data.findIndex(item=> item.reg_number===car.reg_number)] = car;
                setMarkedCars([]);
                setCarCurrent({});
                renderTable();
            })
    }

    const reset = () => startForm();


    const cancel = () => {setCarCurrent({}); renderTable()};

    document.querySelector('[submitButton]').addEventListener('click',submit);
    document.querySelector('[resetButton]').addEventListener('click', reset);
    document.querySelector('[cancelButton]').addEventListener('click', cancel);
}