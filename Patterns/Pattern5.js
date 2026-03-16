
let j = 0;
let i = 0;

function Pattern5(num){
    for( i= num; i>= 1; i--){
        for(j= i; j>= 1; j--){
             process.stdout.write("*");
        }
         process.stdout.write("\n");
    }
}

Pattern5(3);