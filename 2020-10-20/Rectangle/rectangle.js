// function Rectangle(a,b) {
//     this.a = a;
//     this.b = b;
//     this.area = function (){return this.a*this.b}
// }
function Rectangle(a,b) {
    // this.a = a;
    // this.b = b;
    this.area = function (){return a*b};
    this.getA = function (){return a};
    this.getB = function (){return b};
    this.setA = function (value){a=value};
}

const rect = new Rectangle(3,5);

// console.log(rect.a);
// console.log(rect.b);
// console.log(rect.area());
console.log(rect.getA());
console.log(rect.getB());
console.log(rect.area());

rect.setA(11);
console.log(rect.getA());



