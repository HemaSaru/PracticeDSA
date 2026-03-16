let i= 0;
let j= 0;

function Pattern6(num){
    for(i = num; i >= 1; i--){
        for(j = 1; j <= i; j++ ){
            process.stdout.write(j.toString());
        }

        process.stdout.write("\n");
    }
}

Pattern6(3);