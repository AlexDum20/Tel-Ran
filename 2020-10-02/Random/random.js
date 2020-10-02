let x = Math.random();
console.log(x);

// gen.nextInt(bound)

function nextInt(bound){
    //return Math.floor(bound*Math.random());
    return ~~(bound*Math.random());             // trick !!!
}

function nextIntInRange(min, max){
    return min +(~~((max - min)*Math.random()));
}

function nextFloatInRange(min, max){
    return min + (max-min)*Math.random();
}

function nextBoolean(trueProbability=0.5){
    return Math.random() < trueProbability;
}

//console.log(nextInt(10));

let counterTrue = 0;
let counterFalse = 0;
for (let i=0; i<100000000; i++){
    nextBoolean(0.7) ? counterTrue++ : counterFalse++;
}

console.log(counterTrue, counterFalse);
console.log(nextIntInRange(10,100));
console.log(~~(0/4), 11%4);