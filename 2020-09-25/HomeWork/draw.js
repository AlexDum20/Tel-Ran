//creating a field for drawing

let wrap = document.createElement("div");
wrap.classList.add("wrap");
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        let sq = document.createElement("div");
        sq.classList.add("sq", "small");
        sq.style.left = j * 5 + "px";
        sq.style.top = i * 5 + "px";
        wrap.appendChild(sq);
    }
}
document.body.appendChild(wrap);

// creating a block for selecting a color

let title = document.createElement('span');
title.innerText = "Choice of color";
let draw = document.createElement("input");
draw.classList.add("input");
draw.type = "color";
draw.value = "#ff0000";
draw.placeholder = "choice of color";
document.body.appendChild(draw);
let wrapDiv = document.createElement("div");
wrapDiv.classList.add("wrapdiv");
wrapDiv.appendChild(title);
wrapDiv.appendChild(draw);
document.body.appendChild(wrapDiv);

//draw event
wrap.addEventListener("mousedown", function (e) {

    document.addEventListener("mousemove", mmove);
    document.addEventListener("mouseup", mup);

    function mmove(emove) {
        let target = emove.target;
        if (target.localName === "div" && target.className === 'sq small') {
            target.style.backgroundColor = draw.value;
        }
    }

    function mup() {
        document.removeEventListener("mousemove", mmove);
        document.removeEventListener("mouseup", mup);
    }

});






