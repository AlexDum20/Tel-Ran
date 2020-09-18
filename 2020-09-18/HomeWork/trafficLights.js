let but = document.querySelectorAll("[butName]"),
    sq = document.querySelectorAll("[divName]"),
    clean = document.querySelector("[but]");

clean.addEventListener('click',function (){
    sq[0].classList.remove("red");
    sq[1].classList.remove("yellow");
    sq[2].classList.remove("green");
})
but[0].addEventListener('click', function (){
    // console.log(butRed);
    sq[0].classList.add("red");
    sq[1].classList.remove("yellow");
    sq[2].classList.remove("green");
});
but[1].addEventListener('click', function (){
    // console.log(butRed);
    sq[1].classList.add("yellow");
    sq[0].classList.remove("red");
    sq[2].classList.remove("green");
});
but[2].addEventListener('click', function (){
    // console.log(butRed);
    sq[2].classList.add("green");
    sq[1].classList.remove("yellow");
    sq[0].classList.remove("red");
});
