let inp = document.querySelector("[inpName='inp']");
let res = document.querySelector("[spName='res']");
let target = document.querySelector("[divName='target']");

inp.addEventListener('input', ()=> {
    res.innerText = inp.value;
    target.style.width = (200 + (inp.value - 0.5)*400)+"px";
});

target.style.width = (200 + (inp.value - 0,5)*400)+"px";