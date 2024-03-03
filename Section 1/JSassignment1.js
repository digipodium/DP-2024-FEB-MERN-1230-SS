let num = 57463;
let reverse = 0;

while(num>0){

    console.log(num);
    console.log(reverse);

    let d = num%10;
    reverse = reverse * 10 + d;
    num = parseInt(num/10);
}

console.log(reverse);


const fullNames = [ 'Raju Rastogi', 'Ashfaque Ahmad', 'Ayan Alam' ];

console.log('Raju Rastogi'.split(' ')[0]);

let firstNames = [];
for(let name of fullNames){
    firstNames.push( name.split(' ')[0] )
}

console.log(firstNames);

console.log( ['a', 'b', 'c'].join('x') );
console.log( ['a', 'b', 'c'].reverse() );