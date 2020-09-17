// два варинта решения
// let sq = document.querySelector("[spanName='right']").nextElementSibling.nextElementSibling;
// let sq = document.querySelector("p").lastElementChild;
// let sq = document.querySelectorAll("p")[0].children[2];
let sq = document.querySelectorAll("span")[4];

console.log(sq);
sq.style.color = "red";