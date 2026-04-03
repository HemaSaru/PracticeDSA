let n = 5;
let cnt = 0;

function printNames(printTimes) {
    if (cnt == printTimes)
        return;
    else {
        console.log("hema");
        cnt++;
        printNames(printTimes);
    }

}

printNames(n);

//