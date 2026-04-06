let n = 10;
let count = 0;

// function printTillN(num){
//     if(count == num)
//         return;
//     else{
//         console.log(count+1);
//         count++;
//         printTillN(num);
//     }

// }




// printTillN(n);

function printTillN_V2(current, num) {

    if (current > num)
        return;
    else {
        console.log(current);
        printTillN_V2(current + 1, n);
    }
}

printTillN_V2(1, n);