let inpR = document.querySelector("[inpName='inpR']");
let inpG = document.querySelector("[inpName='inpG']");
let inpB = document.querySelector("[inpName='inpB']");
let res = document.querySelector("[spName='res']");
let target = document.querySelector("[divName='target']");

inpR.addEventListener('input', ()=> {
    res.innerText = inp.value;
    // target.style.width = (200 + (inp.value - 0.5)*400)+"px";
});
// target.style.width = (200 + (inp.value - 0,5)*400)+"px";