function replaceVowel(str){
    var newStr = str.replace(/a/gi, '1');

    newStr = newStr.replace(/e/gi, '2');
   
    newStr = newStr.replace(/i/gi, '3');

    newStr = newStr.replace(/o/gi, '4');

    newStr = newStr.replace(/u/gi, '5');

    return newStr;
}

let str = window.prompt('Enter a string to replace its vowels: ');

alert(`After replacing: ${replaceVowel(str)}`);

