let masha = {
    name: 'Masha',
    age: 19,

    birthday: function(){this.age++;},
    greeting: function(day_time){
        console.log('Good '+day_time+', '+this.name+'! You are '+this.age+' years old.');
    }
}

console.log(masha);
console.log(masha.birthday);

masha.birthday();
console.log(masha);

masha.greeting('morning');
masha.greeting();
