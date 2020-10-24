const op ="/";

const code = "return a " + op + " b;";

const sum = new Function("a", "b", code);
console.log(sum);

console.log(sum(3,5));
