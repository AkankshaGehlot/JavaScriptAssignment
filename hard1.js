function realType(value){
    return Object.prototype.toString.call(value).slice(8, -1);
}

//assigned different values to variable to test
let value = [1,2,3];
console.log(realType(value));

value = {
    color: 'red',
    display: function(){
        console.log('Hello');
    }
}
console.log(realType(value));

value = /abc/;

console.log(realType(value));



//another way to getting the real types of values given
function getRealType(value){
    if(value == null)
        return null;
    return value.constructor;
}


