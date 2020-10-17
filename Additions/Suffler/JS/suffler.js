import {states} from "./data.js"

let inp = document.querySelector("[inpName='inp']");
let suffler = document.querySelector("[divName='suffler']");

let fillSuffler = (data) => suffler.innerHTML =  data.map(item => "<p class='list-item'>" + item + "</p>").reduce((state,p)=>state+p, "");
let statesPredicate = (state) => (inp.value == "+") ||
                                 (inp.value && state.toLowerCase().startsWith(inp.value.toLowerCase()));
inp.addEventListener("input", ()=>fillSuffler(states.filter(statesPredicate)));
suffler.addEventListener("click", (e) => {inp.value = e.target.innerText});
// fillSuffler(states.filter(statesPredicate));