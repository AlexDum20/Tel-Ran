'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const cell = document.querySelectorAll('.section'),
        wrapper = document.querySelector('.main'),
        newGame = document.querySelector("[but]"),
        // motion = ['down','up','right','left'],
        victory = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ''];


    wrapper.addEventListener('click', (event) => {
        let a = event.target,
            i = event.target.classList.item(1) - 10,
            j = Number(event.target.classList.item(2));

        let pointsMotion = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];
        for (let k = 0; k < 4; k++) {
            if (pointsMotion[k][0] > 0 && pointsMotion[k][0] <= 4 && pointsMotion[k][1] > 0 && pointsMotion[k][1] <= 4) {
                let cl = ".row" + pointsMotion[k][0] + pointsMotion[k][1];
                let target = document.querySelector(cl);
                if (!target.innerText) {
                    target.innerText = a.innerText;
                    a.innerText = "";
                    a.classList.toggle("empty");
                    target.classList.toggle("empty");
                    if (verifyVictory()){
                        modalStart();
                    }
                }
            }
        }

    });

    newGame.addEventListener('click', function () {
        console.log("Hello");
        setRandom();
    })

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
            function installFor(i) {
                let j = Math.round(15 * Math.random());
                if (newArray[j]) {
                    cell[i].innerText = newArray[j];
                    cell[i].classList.remove("empty")
                    newArray[j] = '';
                } else {
                    installFor(i);
                }
            }

            cell[i].innerText = '';
            installFor(i);
        }
        cell[15].innerText = '';
        cell[15].classList.add("empty");
    }

    // function myAnimation(elem,start){
    //     let pos,  move, plusMinus, stop;
    //     pos = 0;
    //     if (start==0 || start==1) {
    //         move = 'y';
    //     } else {
    //         move = 'x';
    //     }
    //     if (start==0 || start==2) {
    //         plusMinus = '-';
    //         stop = pos - 98;
    //     } else {
    //         plusMinus = '+';
    //         stop = pos + 98;
    //     }
    //
    //     const id = setInterval(frame, 10);
    //     function frame(){
    //         if (pos==stop){
    //             clearInterval(id);
    //         } else {
    //             if (plusMinus == '+'){
    //                 pos++;
    //             } else {
    //                 pos--;
    //             }
    //             if (move == 'y') {
    //                 elem.style.top = pos + "px";
    //                 console.log(pos);
    //             } else {
    //                 elem.style.left = pos + "px";
    //                 console.log('Hello');
    //             }
    //         }
    //     }
    // }

});

