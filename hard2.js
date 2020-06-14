function numInStr(arr){
    let regex = /[a-z]+[0-9]+| [0-9]+[a-z]+| [a-z]+[0-9]+[a-z]+/g;
    let str = arr.join(" ");
    console.log(str);

    let result = str.match(regex);

    return result;
    
}

let arr = ['abc', 'abc1', '1abc', 'ab1c'];
console.log(numInStr(arr));