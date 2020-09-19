let sq = document.querySelectorAll("[divName]"),
    blink = document.querySelector("[blink]"),
    process = false,
    clean = document.querySelector("[but]");


document.querySelectorAll("[butName]").forEach((btn) => {
    btn.addEventListener('click', () => {
        cleaning();
        if (btn.matches("[butName='red']")) {
            sq[0].classList.add("red");
        }
        if (btn.matches("[butName='yellow']")) {
            sq[1].classList.add("yellow");
        }
        if (btn.matches("[butName='green']")) {
            sq[2].classList.add("green");
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
