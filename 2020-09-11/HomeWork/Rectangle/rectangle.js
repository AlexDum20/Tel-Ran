let rectangle = {
    width : 10,
    height : 20,
    getPerimeter : function (){
        return (this.width + this.height) * 2
    },
    getArea : function (){
        return this.width * this.height
    },
    isSquare : function () {
        return this.width === this.height
    }
}

console.log(rectangle);
console.log('perimeter: ',rectangle.getPerimeter());
console.log('Area: ', rectangle.getArea());
console.log('This is square: ', rectangle.isSquare());