let n1 = 20, n2 = 40;
let gcd = 1;
let num = 0;


//Brute Force Method
function findGCD(num1, num2) {
    if(n1>n2)
        num = n1;
    else 
        num = n2;

    for (var i = 1; i <= num; i++) {
        if (((num1 % i) == 0) && ((num2 % i) == 0) ) {
            gcd = i;
        }
    }


}

// findGCD(n1, n2);

// console.log("gcd : ",gcd);


//Optimal Approach

function findGCDOptimally(num1, num2){
    while(num1> 0 && num2 >0){
        if(num1>num2)
            num1= num1%num2;
        else
            num2 = num2% num1;
    }

    if(num1 == 0)
       console.log(num2);
    else console.log(num1);
}

findGCDOptimally(n1,n2);