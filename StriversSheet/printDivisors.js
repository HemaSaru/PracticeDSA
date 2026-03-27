let num = 36;


// Brute Force Method
// function getDivisors(n){
//     for( let i = 1; i <= n; i++){
//         if(n%i == 0)
//             divisors.push(i);
//     }

//     console.log(divisors);
// }

// Optimal Approach
function getDivisors(n){
    let divisors= [];

    for(let i= 1; i* i <=n; i ++){
        if(n % i == 0)
            divisors.push(i);

        if(i !== n/i)
            divisors.push(n/i);
    }
    console.log(divisors);
}

getDivisors(num);