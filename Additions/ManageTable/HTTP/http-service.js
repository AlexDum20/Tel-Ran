import {garage} from '../Content/Car/car.js';

const url = 'http://localhost:8081';

export const setPost = (n) =>{
    fetch(url + "/fill", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(garage(n))
    })
        .then(responce => responce.text())
        .then(text => console.log(text));
}


export const getCarsAll = (done) =>{
    fetch(url + '/getAllCars')
        .then(responce => responce.json())
        .then(json => done(json));
}

export const addCar = (car,done) =>{
    fetch(url + "/addCar", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)
    })
        .then(responce => responce.text())
        .then(text => done());
}

export const editCar = (car, done) =>{
    fetch(url + "/editCar", {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(car)
    })
        .then(responce => responce.text())
        .then(text => done());
}

export const removeCar = (cars, done) =>{
    fetch(url + "/removeCars", {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cars)
    })
        .then(responce => responce.text())
        .then(text => done());
}
