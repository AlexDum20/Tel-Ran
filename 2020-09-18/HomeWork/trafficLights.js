// let but = document.querySelectorAll("[butName]");
let    sq = document.querySelectorAll("[divName]"),
    clean = document.querySelector("[but]");

document.querySelectorAll("[butName]").forEach((btn,i) =>{
    btn.addEventListener('click', () =>{
        if(btn.matches("[butName='red']")){
            sq[0].classList.add("red");
            sq[1].classList.remove("yellow");
            sq[2].classList.remove("green");
        }
        if (btn.matches("[butName='yellow']")){
            sq[1].classList.add("yellow");
            sq[0].classList.remove("red");
            sq[2].classList.remove("green");
        }
        if (btn.matches("[butName='green']")){
            sq[2].classList.add("green");
            sq[1].classList.remove("yellow");
            sq[0].classList.remove("red");
        }
    })
})


clean.addEventListener('click',function (){
    sq[0].classList.remove("red");
    sq[1].classList.remove("yellow");
    sq[2].classList.remove("green");
})
// but[0].addEventListener('click', function (){
//     sq[0].classList.add("red");
//     sq[1].classList.remove("yellow");
//     sq[2].classList.remove("green");
// });
// but[1].addEventListener('click', function (){
//     sq[1].classList.add("yellow");
//     sq[0].classList.remove("red");
//     sq[2].classList.remove("green");
// });
// but[2].addEventListener('click', function (){
//     sq[2].classList.add("green");
//     sq[1].classList.remove("yellow");
//     sq[0].classList.remove("red");
// });
