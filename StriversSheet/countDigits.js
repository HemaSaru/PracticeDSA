//Problem Statement: Given an integer N, return the number of digits in N.

let num = 1234234565;
let count = 0;
let lastDigit = 0;
let digits = 0;

/*
=============Brute Froce method =============

while (num > 0)
{
    lastDigit = num % 10;
    // process.stdout.write(lastDigit.toString());
    // process.stdout.write("\n");

    count += 1;

    num = Math.floor(num/10);
    
        
}
console.log("Number of digits are - " + count);
*/

/*=============Optimal Approach=============*/ 
 digits = Math.floor(Math.log10(num))+1; 
console.log("Number of digits are - " + digits);