let num = 5;
let flag = 0;

checkIfPrimeOrNot(num);


// Brute Force Method
// function checkIfPrimeOrNot(n){
//     for(var i = 0; i<=n; i ++){
//         if(n % i == 0)
//             flag++;
//     }

//     if(flag == 2)
//         console.log("The number is a Prime Number", flag);
//     else
//         console.log("The number is not a Prime Number.", flag);
// }

// Optimal Approach
function checkIfPrimeOrNot(n) {
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            flag++;
            if (n / i !== i)
                flag++;
        }
    }

    if (flag == 2)
        console.log("The number is a Prime Number", flag);
    else
        console.log("The number is not a Prime Number.", flag);
}