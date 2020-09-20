let sq = document.querySelectorAll("[divName]"),
    blink = document.querySelector("[blink]"),
    process = false,
    colors = ['red','yellow','green'],
    clean = document.querySelector("[but]");


document.querySelectorAll("[butName]").forEach((btn) => {
    btn.addEventListener('click', () => {
        cleaning();
        for (let i=0; i<3; i++ ) {
            if (btn.matches(`[butName=${colors[i]}`)) {
                sq[i].classList.add(colors[i]);
            }
        }
    })
});

function cleaning() {
    for (let i=0; i<3; i++) {
        sq[i].classList.remove(colors[i]);
    }
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
