const david = {
    name: "David",
    age: 28,
    info: function (){console.log(this.name+", "+this.age+" years old")}
}

david.info();

const  masha = {
    name: "Masha",
    age: 19
}

// bind

const mashainfo = david.info.bind(masha);
mashainfo();

david.info.bind(masha)();

Object.keys(masha).map(key=>key+'XXX').forEach(key=>console.log(key));

console.log(document.querySelectorAll("[type='checkbox']"));
// const inputs = [].reduce
//     .bind(document.querySelectorAll("[type='checkbox']"))
//     ((state,inp)=>{if(inp.checked)state.push(inp.value);return state;},[]);
    // .reduce((state,inp)=>{if(inp.checked)state.push(inp.value);return state;},[]);

const reducer = (state,inp)=>{if(inp.checked)state.push(inp.value); return state;}
const inputs = document.querySelectorAll("[type='checkbox']");
// const result = [].reduce.bind(inputs)(reducer, []);

const result = [].reduce.call(inputs, reducer, []);

console.log(inputs);

const info = (context) => () => {console.log((context.name + ", " + context.age))};

info(masha)();