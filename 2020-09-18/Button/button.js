let sq = document.querySelector("[divName='blue']");
let but = document.querySelector("[butName='but']");

// function sayHello(){
//     // console.log("Hello");
//     sq.style.backgroundColor = "green";
// };

// but.onclick = function (){
//     console.dir(sq);
//     // console.log(sq.style.border);
//     sq.style.backgroundColor = "green";
//     sq.style.border = "10px solid red";
// };

// but.onclick = function (){
//     sq.style.border = "10px solid red";
// };

but.addEventListener("click", function (){
    sq.style.backgroundColor = "green";
});
but.addEventListener("click", function (){
    sq.style.border = "10px solid red";
});

but.addEventListener("click", function (event){
   console.log(event);
});
