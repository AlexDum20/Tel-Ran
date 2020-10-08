// let arr = [...new Array(10).keys()];   // trick
// console.log(arr);

let arr = ['masha', 'dasha', 'vasya', 'petya', 'sasha', 'glasha', 'natasha']
console.log(arr);

// function shuffle(arr){
//     for (let bound = arr.length; bound > 1;){
//         let index = ~~((bound--)*Math.random());
//         [arr[index], arr[bound]] = [arr[bound], arr[index]];
//     }
// }

function shuffle(arr) {
    arr.forEach(()=> {
        let bound = arr.length;
        let index = ~~((bound--)*Math.random());
        [arr[index], arr[bound]] = [arr[bound], arr[index]]
    });
}

shuffle(arr);
console.log(arr);