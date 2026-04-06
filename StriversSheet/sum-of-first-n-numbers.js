let n = 6;

// brute force method
function sum(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total = total + i;
    }

    return total;
}
// console.log(sum(n));


// Parameterised Way
function getSum(num, sum) {
    if (num < 1) {
        console.log(sum);
        return;
    }

    getSum(num - 1, sum + num);


}
// getSum(5, 0)

// Functional Recursion
function printSum(num){
    if(num === 0){
        return 0;
    }

    return num + printSum(num-1);
}
console.log(printSum(5));