function Counter(){
    let counter = 0;
    this.inc = function (){counter++; return this;};
    this.dec = function (){if (counter > 0) counter--; return this;};
    this.show = function (){console.log(counter); return this;}
}

let counter = new Counter();

counter.inc();
counter.inc();
counter.inc();
counter.dec();

counter.show();

let newcounter = new Counter();

newcounter.inc().inc().inc().dec().show();