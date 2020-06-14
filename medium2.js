function testJackpot(arr){
    for(let i=1;i<4;i++){
        if(!(arr[i] === arr[0]))
            return false;
        else{
            continue;
        }
    }
    return true;
}

if(testJackpot(['3', 3 , 3, '3'])){
    console.log('yeah jackpot!!');
}
else{
    console.log('oh no!!');
}

