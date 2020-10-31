let sq = document.querySelectorAll("[divName]"),
    blink = document.querySelector("[blink]"),
    work = document.querySelector("[work]"),
    colors = ['red', 'yellow', 'green'],
    timerAll = [undefined, undefined, undefined, undefined],
    clean = document.querySelector("[but]");


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

function cleaning(id = undefined) {
    for (let i = 0; i < 3; i++) {
        sq[i].classList.remove(colors[i]);
    }

    id ? timerAll[id] = clearInterval(timerAll[id]) :
        (timerAll.forEach((item, index) => item ? timerAll[index] = clearInterval(item) : ''));

    console.dir(timerAll);
}

function blinkYellow() {
    !timerAll[1] ? timerAll[1] = setInterval(() => sq[1].classList.toggle("yellow"), 300) : '';
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
        timerAll[3] = setTimeout(function () {
            cleaning(1);
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
        timerAll[2] = setTimeout(function () {
            cleaning(1);
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

    !timerAll[0] ? timerAll[0] = setInterval(start, 20000) : '';
    start();
});
