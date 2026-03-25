//An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

let n = 35;
let digit = 0;
let sum= 0;

function checkArmstrong(num){
    while(num>0){
        digit = Math.floor(num % 10);

        sum = sum + (digit* digit * digit);

        num = Math.floor(num/10);
    }

    if(sum == n)
        console.log("Number is an Armstrong number.");
    else    
        console.log("Number is not an Armstrong number.");
}

checkArmstrong(n);