let n = 1;

function printTill1(num) {
    if (num > 0) {
        console.log(num);
        num--;
        printTill1(num);
    }
}

// printTill1(n);



function printTill1_V1(current) {
    if (current < 1) {
        return;
    }
    else{
        console.log(current);

        printTill1_V1(current - 1);
    }

}


printTill1_V1(n);
