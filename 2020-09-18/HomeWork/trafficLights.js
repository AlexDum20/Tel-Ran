let sq = document.querySelectorAll("[divName]"),
    blink = document.querySelector("[blink]"),
    process = false,
    colors = ['red','yellow','green'],
    clean = document.querySelector("[but]");


document.querySelectorAll("[butName]").forEach((btn) => {
    btn.addEventListener('click', () => {
        cleaning();
        console.dir(btn.matches(`[butName=${colors[0]}`));
        for (let i=0; i<3; i++ ) {
            if (btn.matches(`[butName=${colors[i]}`)) {
                sq[i].classList.add(colors[i]);
            }
        }
    })
});

function cleaning() {
    sq[1].classList.remove("yellow");
    sq[0].classList.remove("red");
    sq[2].classList.remove("green");
    if (process) {
        clearInterval(process);
        process = false;
    }
}

clean.addEventListener('click', function () {
    cleaning();
});

blink.addEventListener('click', function () {
    cleaning()

    function start_add() {
        sq[1].classList.toggle("yellow");
    }

    if (!process) {
        process = setInterval(start_add, 500);
    }
});
