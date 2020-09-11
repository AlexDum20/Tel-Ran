let triangle = {
    a: 3,
    b: 4,
    c: 5,
    perimeter : function (){
        return this.doExist() ? this.a + this.b + this.c : undefined;
    },
    doExist: function (){
        return (this.a + this.b >= this.c) &&
            (this.a + this.c >= this.b) &&
            (this.c + this.b >= this.a);
    }
}

console.log(triangle);
console.log('perimeter: ',triangle.perimeter());
console.log('do exist: ', triangle.doExist());