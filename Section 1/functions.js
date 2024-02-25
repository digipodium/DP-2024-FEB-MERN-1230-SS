function addNums(a, b){
    var c = a+b;

    // console.log(c);
    return c;
}

const ans = addNums(345, 1234);

console.log(ans);

// console.log(c);

const getAvg = function(m1, m2, m3){
    return (m1+m2+m3)/3;
}

const avg = getAvg(34, 56, 78);
console.log(avg);

// es6
const factorial = (n) => {
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact *= i;
    }
    return fact;
}

console.log(factorial(5));