function removeDups(arr){
   return arr.filter((item, index) => {
       return arr.indexOf(item) === index;
   })
}

 var arr = ['The','big','cat','has', 2 , 'has', 'spots',];

console.log(`Array with duplicate items: ${arr}`);

console.log(`Unique Array: ${removeDups(arr)}`);

