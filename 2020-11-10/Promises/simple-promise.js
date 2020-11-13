const promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        // if (Math.random() > 0.5) resolve('success');
        // else reject ('fail');
        Math.random()>0.5 ? resolve('success') : reject('fail');
    },5000)
});

promise.then(res => console.log(res), err => console.log(err));