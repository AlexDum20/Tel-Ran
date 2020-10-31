wrap = document.querySelector("[divName='wrap']")
const tt = ['second', 'minute', 'hour'];

//creating arrows
tt.forEach((item) => {
    let div = document.createElement('div');
    div.classList.add('all', item);
    wrap.appendChild(div);
})

//условие ? выражение1 : выражение2
//Set the interval of movement of the hands
setInterval(function () {
    const t = getCurrentTime();
    tt.forEach((item) => {
        let etime = document.querySelector("." + item);
        etime.style.transform = (item == 'second') ? `rotate(${t.seconds * 6 + t.msec * 0.006}deg)` :
            ((item == 'minute') ? `rotate(${(t.minutes + t.seconds / 60) * 6}deg)` :
                `rotate(${(t.hours + t.minutes / 60) * 30}deg)`);
    });
}, 50);

//creating the dial numbers
for (let i = 1; i <= 12; i++) {
    let span = document.createElement('span');
    span.innerText = i;
    let left = (250 + Math.sin(i * 0.5235987755982988) * 200).toFixed(2);
    let top = (250 - Math.cos(i * 0.5235987755982988) * 200).toFixed(2);
    span.style.left = `${left}px`;
    span.style.top = `${top}px`;
    wrap.appendChild(span);
}

//create a division on the seconds on the dial
for (let i = 0; i < 60; i++) {
    p = document.createElement('p');
    let shiftLeft = 0, shiftTop = 0;
    i % 5 == 0 ? p.classList.add('big') : p.classList.add('small');
    p.style.transform = `rotate(${i * 6}deg)`;
    wrap.appendChild(p);
}

//getting the current time in hours, minutes, and seconds
function getCurrentTime() {
    const t = new Date(),
        seconds = t.getSeconds(),
        minutes = t.getMinutes(),
        hours = t.getHours(),
        msec = t.getMilliseconds();
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
        'msec': msec
    };
}
