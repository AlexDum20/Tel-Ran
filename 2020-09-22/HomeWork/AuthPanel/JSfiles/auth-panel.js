let submit = document.createElement("button");
submit.textContent = "Submit";
 submit.setAttribute("butName", "");

let reset = document.createElement("button");
reset.textContent = "Reset";

let log = document.createElement("input");
log.classList.add("inp");

let psw = document.createElement("input");
psw.classList.add("inp");
psw.type = "password";

let result = document.createElement("div");
result.classList.add('block');
result.innerText = "result";

let wrap = document.createElement("div");

let titleHead = document.createElement("span");
titleHead.classList.add("titleHead");
titleHead.innerText = "Please, login!";


let titlelog = document.createElement("span");
titlelog.classList.add("title");
titlelog.innerText = "Login";

let titlepsw = document.createElement("span");
titlepsw.classList.add("title");
titlepsw.innerText = "Password";


let pend = document.createElement("p");
pend.classList.add("numButton");




submit.addEventListener('click', function () {
    if (checkAutoInfo(log.value, psw.value)) {
        result.classList.add('green');
        result.classList.remove('red');
        result.innerText = "Access allowed";
    } else {
        result.classList.add('red');
        result.classList.remove('green');
        result.innerText = "Access denied";
    }
})

reset.addEventListener("click", function () {
    result.classList.remove('green');
    result.classList.remove('red');
    result.innerText = "result";
    log.value = '';
    psw.value = '';
})



function authPanel() {

    let br1 = document.createElement("br");
    let br2 = document.createElement("br");
    let br4 = document.createElement("br");
    let br5 = document.createElement("br");


    wrap.appendChild(titleHead);
    wrap.appendChild(br1);
    wrap.appendChild(log);
    wrap.appendChild(titlelog);
    wrap.appendChild(br2);
    wrap.appendChild(psw);
    wrap.appendChild(titlepsw);
    wrap.appendChild(br4);
    wrap.appendChild(result);
    wrap.appendChild(br5);
    pend.appendChild(submit);
    pend.appendChild(reset);
    wrap.appendChild(pend);
    return wrap
}
