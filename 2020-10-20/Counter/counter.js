function Counter(){
    let counter = 0;
    this.inc = function (){counter++;}
    this.show = function (){console.log(counter);}
}

let counter = new Counter();
console.log(counter);

counter.inc();
counter.inc();
counter.inc();

counter.show();

console.log(counter.counter);