//global
console.log('global');
console.log(this);

//by name
console.log('by name');
function foo() {
    console.log(this);
}
foo();

+function(){
    console.log(this);
}();

//as a method
console.log('method');
const obj = {
    bat: function (){console.log(this)}
}

obj.bat();

//constructor
console.log('Constructor');
function SumeConstructor(x){
    this.x = x;
    console.log(this);
}
const  someObject = new SumeConstructor(5);

//event listener
console.log('listener');
document.body.addEventListener('click', function (){console.log(this)});