function specialReverse(str, letter){
    let begin = 0;
    let end = 0;

    while(end!=str.length){

        //finding start index to search
        let start = str.indexOf(`${letter}`, begin);
        if(start == -1)
            break;

        //finding end index 
        end = str.indexOf(" ", start+1);
        if(end == -1){
            end= str.length;
            begin = end;
        }else{
            begin = end;
        }
        
        //slicing the string to reverse
        let newStr = str.slice(start, end);
        
        //splitting string into array
        let arr = newStr.split("");
        
        //saving the old string before reversing 
        let oldStr = arr.join("");
       
        //reversing
        arr = arr.reverse();

        //joining array elements to form a string again
        newStr = arr.join("");

        str = str.replace(oldStr, newStr);
    }
    
    return str;
}

var str = 'peter piper picked pickled peppers';
letter= 'p';

console.log('Original String:' + ' '+ str);

str = specialReverse(str, letter);

console.log('Reversed String:' + ' '+ str);


