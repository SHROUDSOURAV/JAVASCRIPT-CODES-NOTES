// use function to take string as argument and return the number of vowels of the string

function countVowels(str){
    let count = 0;    
    // typeof always returns string
    // so best to use !== to check whether datatype + value is equal or not
    if(typeof str !== 'string'){     // string validation check part
        return 0;
    }
    let str2 = str.toUpperCase();
    for(let i=0; i<str2.length; i++){
        if(str2[i] === 'A' || str2[i] === 'E' ||  str2[i] === 'I' || str2[i] === 'O' || str2[i] === 'U'){
            count++;
        }
    }
    console.log(`<-- Number of Vowels in ${str} -->`);
    return count;   
}

console.log(countVowels('Sourav Bose'));    
console.log(countVowels(123));  // not a string so returns false