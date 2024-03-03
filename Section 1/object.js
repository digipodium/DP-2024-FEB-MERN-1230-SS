const user = { name: 'Raju', email: 'raju@mail.com', password: '1234' };

console.log(user.name);
console.log(user.email);
console.log(user['password']);

user.password = 'abrakadabra';

console.log(user);

user.address = 'Lucknow';
console.log(user);
delete user.address;
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: 'Samsung',
    model: 'S23',
    price: 79999,
    colors: ['black', 'blue', 'silver']
};

console.log(smartphone.price);
console.log(smartphone.colors[1]);

smartphone.colors[0] = 'white';
console.log(smartphone);

const phoneArray = [
    { brand: 'Samsung', model: 'S23', price: 79999, colors: ['black', 'blue', 'silver'] },
    { brand: 'Apple', model: 'iPhone 15', price: 90000, colors: ['black', 'blue'] },
    { brand: 'Oneplus', model: '12', price: 50000, colors: ['red', 'blue'] },
    { brand: 'Vivo', model: 'Y33S', price: 35000, colors: ['gold', 'silver'] }
];

console.log('-----------');

console.log(phoneArray[2].colors[1]);

phoneArray[3].price = 38000;

phoneArray[1].colors.push('purple');

console.log(phoneArray);
// filter all phones with price less than 60000

const budgetPhones = phoneArray.filter( (phone) => { return phone.price < 60000 } );
console.log(budgetPhones);

// filter all phones available in blue color

console.log( ['a', 'b', 'c'].includes('d') );
const bluePhones = phoneArray.filter( (phone) => { return phone.colors.includes('blue') } )
console.log(bluePhones);

const models = phoneArray.map((phone) => { return phone.model });
console.log(models);