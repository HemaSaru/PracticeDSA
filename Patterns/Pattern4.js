
let j = 0;
let i = 0;

function Pattern4(num){
    for( i= 1; i<= num; i++){
        for(j= 1; j<= i; j++){
             process.stdout.write(i.toString());
        }
         process.stdout.write("\n");
    }
}

Pattern4(5);