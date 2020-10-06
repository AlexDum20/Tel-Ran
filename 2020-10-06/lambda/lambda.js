console.log(sum(3,5));


function  sum(a,b){
    console.log(a,b);
    return a + b;
}

let sumlumbda = (a,b) => {console.log(a,b); return a + b;}

console.log(sumlumbda(11, 15));

// let cube = (x)=>{return x*x*x;};
let cube = x=>{return x*x*x;};

console.log(cube(5));

let hello = () => {console.log("hello")};
hello();

let somePerson = (name, age) => {return {name : name, age : age}};

console.log(somePerson("sasha", 48));