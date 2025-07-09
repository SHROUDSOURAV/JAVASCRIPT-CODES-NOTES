/*
let => variables can be re-declared 
const => constant variables cannot be re-declared (immutable)
*/



let Fname = "sourav";   //string type
let cclass = 12;    // number type
let section = 'E';  // string type
const department = "BCA";   // string type
let age = null; // null type
const obj = {   // object type variable (key : value ) pairing
    'fname':'sourav',
    'lname':'bose',
    'dep':'BCA',
    'sec':'E',
    'roll':358
};

console.log(Fname,cclass,section,department,age);
console.log(obj);

// checking type of the variables initialized
console.log(typeof obj);
console.log(typeof Fname);
console.log(typeof age);    // null type is also treated as object
console.log(typeof department);
console.log(typeof obj['roll']);

//accessing individual key:pair values in object
console.log("xxxxxxxxx object xxxxxxxxxx");
console.log(obj['fname']);
console.log(obj['dep']);
console.log(obj['lname']);
console.log(obj['roll']);
console.log(obj['sec']);


