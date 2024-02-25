const nums = [ 2, 6, 1, 7, 2, 9, 4, 93 ];

for(let i=0; i<nums.length; i++){
    console.log(nums[i]);
}

for(let i of nums){
    console.log(i);
}

console.log('forEach function');
nums.forEach( (n) => { console.log(n) } );

// find sum of all elements of the array
let sum = 0;
nums.forEach( (i) => { sum+=i; } );
console.log('Sum : ', sum);

// create a new array with cube of all array elements
let myArr = [];
for(let i of nums){
    myArr.push(i**3);
};
console.log(myArr);
const prices = ['$687.35', '$23.4', '$123.45', '$987.652'];
// remove the dollar sign and convert to number
// [ 687, 23, 123, 987 ]
console.log(parseInt('$687.35'.slice(1)));

const numPrices = [];
prices.forEach( (p) => { numPrices.push(parseInt(p.slice(1))) } );
console.log(numPrices);