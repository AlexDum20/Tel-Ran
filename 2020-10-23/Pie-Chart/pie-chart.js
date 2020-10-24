const array = [1, 2, 3, 4, 5, 25];
let wrap = document.querySelector("[circle]");

const sum = array.reduce((acc, elem)=>acc+elem,0);
console.log(sum);
let angleStart = 0;
let color = getColor();
array.forEach((item,index)=>{
    let count = Math.ceil(item*360/(sum*90));
    if (index<=array.length-1 && angleStart<270){

        for (let i=1; i<=count; i++){
            let div = document.createElement('div');
            div.classList.add('part');
            div.style.transform = `rotate(${angleStart}deg)`;
            div.style.backgroundColor = color;
            // if (i==1){
            //     div.innerText = (index+1) + ' : ' + item;
            // }
            wrap.appendChild(div);
            if(count>1 && i<count){
                angleStart+=90;
                if(index===array.length-1 && i===(count-1)){
                    i++;
                }
            }else if(count>1 && i==count){
                angleStart+= (item*360/sum)-(count-1)*90;
                color = getColor();
            }else{
                angleStart+=item*360/sum;
                color = getColor();
            }
        }
    }
});
wrap.style.backgroundColor = color;
function getColor() {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}