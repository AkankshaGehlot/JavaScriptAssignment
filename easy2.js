function addUp(num){
    if(num>0 && num<=1000){
        return num + addUp(num-1);
    }else if(num>1000 || num<0){
        console.log('Enter a number within the range of 1-1000');
        return undefined;
    }
    return num;
}

var num = window.prompt('To get addUp \n Enter any number b/w 1-1000:');

alert(`ADD UP to ${num} = ${addUp(parseInt(num))}`);