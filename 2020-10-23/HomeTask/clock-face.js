wrap = document.querySelector("[divName='wrap']")
const tt = ['second', 'minute', 'hour'];

//creating arrows
tt.forEach((item)=>{
    let div = document.createElement('div');
    div.classList.add('all',item);
    wrap.appendChild(div);
})

//условие ? выражение1 : выражение2
//Set the interval of movement of the hands
let timeout = setInterval(function (){
    const t = getCurrentTime();
    // console.log(document.querySelector(".second"));
    tt.forEach((item)=> {
        let etime = document.querySelector("." + item);
        etime.style.transform = (item == 'second') ? `rotate(${t.seconds*6}deg)` :
                ((item == 'minute') ? `rotate(${(t.minutes+t.seconds/60)*6}deg)` :
                `rotate(${(t.hours + t.minutes/60)*30}deg)`);
    });
},1000);

//creating the dial numbers
for(let i=1; i<=12; i++){
    let span = document.createElement('span');
    span.innerText = i;
    let left = (250+Math.sin(i*0.5235987755982988)*200).toFixed(2);
    let top = (250-Math.cos(i*0.5235987755982988)*200).toFixed(2);
    span.style.left = `${left}px`;
    span.style.top = `${top}px`;
    wrap.appendChild(span);
}

//create a division on the seconds on the dial
for(let i=0; i<60; i++){
    p = document.createElement('p');
    let shiftLeft = 0, shiftTop = 0;
    if (i%5==0){
        p.classList.add('big');
        shiftLeft = 1.5; shiftTop = 7.5;
    } else {
        p.classList.add('small');
        shiftLeft = 0.5; shiftTop = 5;
    }
    p.style.transform = `rotate(${i*6}deg)`;
    let _left = (250 - shiftLeft + Math.sin(i*0.10471975511965978)*160).toFixed(2);
    let _top = (250 - shiftTop - Math.cos(i*0.10471975511965978)*160).toFixed(2);
    p.style.left = `${_left}px`;
    p.style.top = `${_top}px`;
    wrap.appendChild(p);
}

//getting the current time in hours, minutes, and seconds
function getCurrentTime() {
    const t = new Date(),
        seconds = t.getSeconds(),
        minutes = t.getMinutes(),
        hours = t.getHours();
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
