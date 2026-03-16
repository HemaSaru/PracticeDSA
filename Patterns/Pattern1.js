function pattern1(n){
    for(var i = 1; i<= n; i ++){
       for(var j = 1; j<=n; j++){
           process.stdout.write("*");
        }
    
       process.stdout.write("\n");
    }
}

pattern1(8);