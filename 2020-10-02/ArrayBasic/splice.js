let arr = [...new Array(10).keys()];
console.log(arr);

/*
    splice(from, numberYoRemove, ...itemsToInsert)
        from - index to remove from
        numberToRemove - number of items to remove
        itemsToInsert - items to insert instead of removed ones
 */

let insert = ['sasha', 'masha', 'dasha'];

//console.log(arr.splice(3, 5, 444, 555, 666, 777));
console.log(arr.splice(3,5, ...insert));
console.log(arr);
