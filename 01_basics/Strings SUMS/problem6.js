//sort a string
let var1 = "souravbose";

//step 1 => split each character individually and form array structure
let var2 = var1.split("");

//step2 => sort the array structure
var2 = var2.sort();

//step3 => join the characters and form the string
var2 = var2.join("");
console.log(var2);