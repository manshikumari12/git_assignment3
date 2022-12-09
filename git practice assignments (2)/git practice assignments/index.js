
function checkprime(num){
    let count=0
    for(let i=0;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2)
    {
        return fasle;
    }
   else{
        return true;
     }
    
}
for(let i=1;i<=num;i++){
    let output = checkprime(num)
    if(output===true){
        console.log(i,' is a Prime Number ')
    }else{
        console.log(i,' its not a Prime Number ')
    }
}