let sq = document.querySelector('[divName="square"]');
let but = document.querySelector('[butName = "but"]');

but.addEventListener('click', function (){
    sq.classList.toggle("green");
    console.log(sq.classList);
});
