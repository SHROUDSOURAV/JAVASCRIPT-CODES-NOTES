// learning about strings in js
// string example below:
// str = "sourav"   => string datatype variable
// str.length => finds the length of the string
// string indices => str[0], str[1], str[2], ..... (helps to select individual character in the string)


fname = "sourav";   // string variable
fnameSize = fname.length;   //  length of the string
console.log(`Length of ${fname} is ${fnameSize}`);  

// selecting first and last character of the string
firstCharacter = fname[0];  // first character
lastCharacter = fname[fnameSize-1]; // last character

console.log(`First Character => ${firstCharacter}`);
console.log(`Last Character => ${lastCharacter}`);