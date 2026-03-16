function pattern2(num){
    for(var i = 1; i<= num; i++){
        for(var j = 1; j<= i; j++){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
}

pattern2(6);