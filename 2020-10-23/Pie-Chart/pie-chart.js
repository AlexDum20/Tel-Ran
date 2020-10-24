const array = [1, 2, 3, 4, 5, 25];
let wrap = document.querySelector("[circle]");

const sum = array.reduce((acc, elem) => acc + elem, 0);
let angleStart = 0;
const colorArray = [];

const setColor = (n) => {
    let color = getColor();
    !colorArray.includes(color) && n > 0 ? colorArray.push(color) && setColor(n--) : n;
}

setColor(array.length);
array.forEach((item, index) => {
    let count = Math.ceil(item * 360 / (sum * 90));
    if (index <= array.length - 1 && angleStart < 270) {
        for (let i = 1; i <= count; i++) {
            let div = document.createElement('div');
            div.classList.add('part');
            div.style.transform = `rotate(${angleStart}deg)`;
            div.style.backgroundColor = colorArray[index];
            wrap.appendChild(div);
            count > 1 && i < count ? angleStart += 90 &&
                (index === array.length - 1 && i === (count - 1) ? i++ : i) :
                (count > 1 && i == count ?
                    angleStart += (item * 360 / sum) - (count - 1) * 90 :
                    angleStart += item * 360 / sum);
        }
    }
});
wrap.style.backgroundColor = colorArray[array.length - 1];

function getColor() {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}