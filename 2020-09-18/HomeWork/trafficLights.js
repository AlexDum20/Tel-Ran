let sq = document.querySelectorAll("[divName]"),
    blink = document.querySelector("[blink]"),
    work = document.querySelector("[work]"),
    process = false, timeId = false,
    processGreen = false, processRed = false,
    butBlink = false;
    colors = ['red', 'yellow', 'green'],
    clean = document.querySelector("[but]");

    console.dir(blink);


document.querySelectorAll("[butName]").forEach((btn) => {
    btn.addEventListener('click', () => {
        cleaning();
        for (let i = 0; i < 3; i++) {
            if (btn.matches(`[butName=${colors[i]}`)) {
                sq[i].classList.add(colors[i]);
            }
        }
    })
});

function cleaning() {
    for (let i = 0; i < 3; i++) {
        sq[i].classList.remove(colors[i]);
    }

    if (timeId) {
        clearInterval(timeId);
        timeId = false;
    }
    if (process) {
        clearInterval(process);
        process = false;
    }
    if (processGreen) {
        clearInterval(processGreen);
        processGreen = false;
    }
    if (processRed) {
        clearInterval(processRed);
        processRed = false;
    }
}

function blinkYellow() {
    if (!timeId) {
        timeId = setInterval(function () {
            sq[1].classList.toggle("yellow");
        }, 300);
    }
}

function cleanTimeid() {
    clearInterval(timeId);
    timeId = false;
}

clean.addEventListener('click', function () {
    cleaning();
});

blink.addEventListener('click', function () {
    cleaning();
    blinkYellow();
});

work.addEventListener('click', function () {
    cleaning()

    function start() {

        //included red
        processRed = setTimeout(function () {
            cleanTimeid();
            sq[0].classList.add(colors[0]);
            setTimeout(function () {
                sq[1].classList.remove(colors[1]);
            }, 500);
        }, 500);

        //included yellow
        setTimeout(function () {
            blinkYellow();
            setTimeout(function () {
                sq[0].classList.remove(colors[0]);
            }, 1000)
        }, 8000);

        //included green
        processGreen = setTimeout(function () {
            cleanTimeid();
            sq[2].classList.add(colors[2]);
            setTimeout(function () {
                sq[1].classList.remove(colors[1]);
            }, 1000);
        }, 12000);

        //included yellow
        setTimeout(function () {
            blinkYellow();
            setTimeout(function () {
                sq[2].classList.remove(colors[2]);
            }, 1000)
        }, 17000);
    }

    if (!process) {
        process = setInterval(start, 20000);
    }
    start();
});
