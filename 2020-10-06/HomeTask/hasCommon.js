let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8, 7];

function hasCommon(arr1, arr2){
    let result = false;
    arr1.forEach(item1 => {
        if(arr2.includes(item1)){
            result = true;
        }
    })
    return result;
}

console.log(hasCommon(arr1, arr2));