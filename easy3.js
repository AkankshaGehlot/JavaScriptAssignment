

let replaceVowel = function(character){
    let vowel ={
        a: '1',
        e: '2',
        i: '3',
        o: '4',
        u: '5',
    }
    return `${vowel[character]}`; 
}
let str = "akanksha";
var regex= /a|e|i|o|u/gi;
var newStr = str.replace(regex, replaceVowel(regex));

console.log(newStr);