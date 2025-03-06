//Make First Letter of a String Uppercase

let var1 = "souravbose";

let var2 = var1.charAt(0);  //extract first character
var2 = var2.toUpperCase();  //make first characte to UpperCase
var2 = var2 + var1.substring(1);    //add characters from (var1)index 1-rest to var2 

console.log(var2);