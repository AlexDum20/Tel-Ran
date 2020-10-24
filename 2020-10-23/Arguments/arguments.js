function sum(...args){
    return args.reduce((state, item) => state + item, 0);
}

console.log(sum(3,5,7,9));
