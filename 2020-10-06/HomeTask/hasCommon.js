// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8, 7];

let arr1 = [1, 3, {a: 5}, 7, 9];
let arr2 = [{a: 5}, 4, 6, 5, 0];

// function hasCommon(arr1, arr2){
//     let result = false;
//     arr1.forEach(item1 => {
//         if(arr2.includes(item1))
//             result = true;
//
//     })
//     return result;
// }

let hasCommon = (arr1,arr2) => arr1.some(item => arr2.includes(item));

console.log(hasCommon(arr1, arr2));