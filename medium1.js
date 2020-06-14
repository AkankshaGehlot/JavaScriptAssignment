function specialReverse(str, letter){
    let start = str.indexOf(` ${letter}`)
    console.log(start);

    let end = str.indexOf(" ", start+1);
    console.log(end);

    let newStr = str.slice(start, end);
    console.log(newStr);

    let arr = newStr.split();
    console.log(arr);

    arr = arr.reverse();
    console.log(arr);

    
    
    
}
var str = 'My name is Aku';
letter= 'n';
specialReverse(str, letter);
//split into array
//search 
//reverse
//concat