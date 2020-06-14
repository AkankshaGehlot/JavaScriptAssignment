function dividesEvenly(num1, num2){
    if(num1 >= num2 && num2!=0){
        return num1%num2 == 0;
    }
    return false;
}

//taking input from user
let a = window.prompt('Enter first number');
let b = window.prompt('Enter second number');

if(dividesEvenly(parseInt(a),parseInt(b))){
    alert('DividesEvenly!');
}else{
    alert('Does not DividesEvenly!');
}