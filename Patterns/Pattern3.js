
let j = 0;
function pattern3(num){
    for(var i = 1; i <= num; i++){
        for( j = 1; j <= i ; j++ ){
            process.stdout.write(j.toString());
        }
        process.stdout.write("\n");
    }
}

pattern3(2);