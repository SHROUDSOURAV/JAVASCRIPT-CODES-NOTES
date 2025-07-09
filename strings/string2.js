// learning about string interpolation
// learning about string functions 
// str.toUpperCase(), str.toLowerCase(), str.trim()
// str.slice(), str.concat(), str.replace(), str.charAt()
// learning about string upperclass() and lowercase() and trim() function

let fname = "sourav";
let lname = "bose";


// demonstrating string interpolation
// string interpolation is done through backticks ``
// values of variables are displayed there using ${variable_name} inside the backticks (``)

let merge = `${fname} ${lname}`;    // string interpolation
console.log(merge);


let var1 = "sourav bose";
let var2 = var1.toUpperCase();  // converts all the characters in the string(var1) to UpperCase(doesn't change original string variable)
console.log(var2);

let var3 = var2.toLowerCase();  // converts all the characters in string(var2) to LowerCase(doesn't change original string variable)
console.log(var3);


let var4 = '   sourav      bose   testing    ';
let var5 = var4.trim();     // removes spaces from front and last
console.log(var4);  // compare var4 and var5 output
console.log(var5);


let var6 = 'abcdef';
console.log(var6.slice(3,5));   //slice from index(starting value) to index(ending value - 1) of string(var6)
                                // ending value i.e index(5) is non inclusive so from index(3) to index(4)

console.log(var6.concat('ghi'));    // attaching/concatanating 'ghi' with 'abcdef'


let var7 = 'YYYello';
console.log(var7.replace('Y','H')); //replace the first occurence of Y with H only

// to replace all occurences of Y with H
// use replaceAll()
console.log(var7.replaceAll('Y','H'));


let var8 = 'barney stinson';

// if we are trying to access individual characters of the string
// use charAt(<index of character>) function
console.log(var8.charAt(3));    // 3 = index value of character (n)