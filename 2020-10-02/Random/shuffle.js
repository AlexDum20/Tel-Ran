let arr = [...new Array(10).keys()];   // trick
console.log(arr);

function shuffle(arr){
    for (let bound = arr.length; bound > 1;){
        let index = ~~((bound--)*Math.random());
        [arr[index], arr[bound]] = [arr[bound], arr[index]];
    }
}

shuffle(arr);
console.log(arr);
