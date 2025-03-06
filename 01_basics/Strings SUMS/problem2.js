//reverse a string
const sample_string = "souravbose";

let rev_string = sample_string.split(""); //splitting the string in each element like array
rev_string = rev_string.reverse();  //reversing the array structure
rev_string = rev_string.join(""); //joining each character in array without spaces/commas

console.log(rev_string);