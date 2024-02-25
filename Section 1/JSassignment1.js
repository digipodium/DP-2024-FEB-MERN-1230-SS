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