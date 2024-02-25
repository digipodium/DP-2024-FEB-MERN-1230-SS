for( let i=0; i<10; i++){
    console.log(i);
}

console.log("------------");
const nums = [7, 2, 3, 4, 5, 6, 7];

for(let n of nums){
    console.log(n);
}

// find sum of all numbers from 100 to 300 which 
// are divisible by 7 as well 11

let sum = 0;
for(let i=100; i<=300; i++){
    if(i%7 === 0 && i%11 === 0){
        console.log(i);
        sum += i;
    }
}
console.log("Sum: ", sum);