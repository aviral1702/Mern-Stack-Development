const user= {
    name: 'Aviral',
    email: 'avi@gmail.com',
    age: 21,
    password: 'jnrjrnfr',
    'roll-no': 'A17'
}
console.log(user.name);
console.log(user['age']);
console.log(user["roll-no"]);

user.city='Lucknow';
console.log(user);

user.age=22
console.log(user);

const smartphone={
    brand: 'Samsung',
    model: 's23',
    price: 80000,
    colors: ['black','blue','grey']
}
console.log(smartphone.colors[2]);
smartphone.colors[2]='red';
console.log(smartphone);

const smartphoneList=[
    {
        brand: 'Samsung',
        model: 's23',
        price: 80000,
        colors: ['black','blue','grey']
    }
];
console.log(smartphoneList[0].brand);
console.log(smartphoneList[0].colors[1]);