function charCount(str1, str2){
    let count = 0;
    for(let i=0; i<str2.length; i++){
        if(str1 == str2[i]){
            count++;
        }
    }
    return count;
}

