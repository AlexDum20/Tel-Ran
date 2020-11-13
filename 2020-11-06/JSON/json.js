const obj = {
    name: 'John',
    lastName: 'Smith',
    age: 32,
    weight: 87.3,
    married: true,
    address: {
        city: 'Haifa',
        street: '8th North'
    },
    children:['Masha','Glasha']
}

const json = JSON.stringify(obj);
console.log(json);
const obj1 = JSON.parse(json);
console.log(obj1);

const arr = [1,2,3,4,5,6];
console.log(JSON.stringify(arr));
console.log(JSON.stringify('Vasya'));
console.log(JSON.stringify(3.1415926));

let person2 = {};
let person1 = {name:'Vasya', friend: person2};
person2 = {name:'Lesha', friend: person1};
console.log(JSON.stringify(person2));

