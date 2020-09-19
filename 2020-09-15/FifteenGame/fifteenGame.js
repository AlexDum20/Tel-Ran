'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const cell = document.querySelectorAll('.section'),
        wrapper = document.querySelector('.main'),
        newGame = document.querySelector("[but]"),
        victory = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ''];

    wrapper.addEventListener('click', (event) => {
        let a = event.target,
            i = event.target.classList.item(1) - 10,
            j = Number(event.target.classList.item(2));

        let pointsMotion = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];
        for (let k = 0; k < 4; k++) {
            // console.log("all ", k, pointsMotion[k])
            if (pointsMotion[k][0] > 0 && pointsMotion[k][0] <= 4 && pointsMotion[k][1] > 0 && pointsMotion[k][1] <= 4) {
                let cl = ".row" + pointsMotion[k][0] + pointsMotion[k][1];
                let target = document.querySelector(cl);
                if (!target.innerText) {
                    target.innerText = a.innerText;
                    a.innerText = "";
                    console.log(Math.round(15 * Math.random()));
                    if (verifyVictory()) alert("Victory!");
                }
            }
        }

    });

    newGame.addEventListener('click', function () {
        setRandom();
    })

    function verifyVictory() {
        for (let i = 0; i <= 15; i++) {
            if (cell[i].innerText != victory[i]) {
                return false;
            }
        }
        return true;
    }

    function setRandom() {
        let newArray = victory.slice();
        for (let i = 0; i <= 14; i++) {
            function install(i) {
                let j = Math.round(15 * Math.random());
                if (newArray[j]) {
                    cell[i].innerText = newArray[j];
                    newArray[j] = '';
                } else {
                    install(i);
                }
            }

            cell[i].innerText = '';
            install(i);
        }
    }
});