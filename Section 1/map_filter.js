nums = [ 23, 29, 99, 32, 67, 30, 41 ];

const sqrt = nums.map( (n) => { return n**2 } );
console.log(sqrt);

const names = [ 'Raju Rastogi', 'Ashfaque Ahmad', 'Ayan Alam' ];

const firstNames = names.map( (n) => { return n.split(' ')[0] } );

console.log(firstNames);

const prices = [ 3400, 888, 3845, 2874, 2992 ];

console.log( 86735 * 0.9 );
const discountedPrices = prices.map( ( p ) => { return p*0.9 } );
console.log(discountedPrices);

const budgetPrice = prices.filter( (p) => { return p>1000 && p<3000 } );
console.log(budgetPrice);