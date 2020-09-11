'use strict'
let a = 15;
console.log(a);
console.log(a/0>0);
let id1 = Symbol('id1');
let id2 = Symbol('id2');
console.log(id1,id2, id1==id2);

const answers = [];
// answers[0] = prompt('Как ваше имя?','');
// answers[1] = prompt('Как ваша фамилия?','');
// answers[2] = prompt('Сколько вам лет?','');
// document.write(answers);
console.log(typeof(answers));
console.log(typeof(null));

const category = 'toys';
console.log(`https://someurl.com/${category}/5`)