'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const cell = document.querySelectorAll('.section'),
        wrapper = document.querySelector('.main');

    wrapper.addEventListener('click', (event) => {
        let a = event.target,
            i = event.target.classList.item(1) - 10,
            j = Number(event.target.classList.item(2));
        // console.dir(event.target);
        // console.log(i, j, i - 1, j - 1);

        let pointsMotion = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];
        for (let k = 0; k < 4; k++) {
            // console.log("all ", k, pointsMotion[k])
            if (pointsMotion[k][0] > 0 && pointsMotion[k][0] <= 4 && pointsMotion[k][1] > 0 && pointsMotion[k][1] <= 4) {
                let cl = ".row" + pointsMotion[k][0] + pointsMotion[k][1];
                let target = document.querySelector(cl);
                if (!target.innerText) {
                    target.innerText = a.innerText;
                    a.innerText = "";
                }
            }
        }

    });


});