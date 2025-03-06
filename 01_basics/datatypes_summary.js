/*
Primitive Datatypes
7 types :
    String
    Number
    Boolean
    Null
    Undefined
    Symbol
    BigInt
*/
const score = 100;  //number
const scoreValue = 100.3;   //number
const isLoggedIn = false;   //boolean
const outsideTemp = null;   //null
let userMail;   //undefined

// id and id2 value same but are different
const id = Symbol('12345');
const id2 = Symbol('12345');
console.log(id == id2);

//BigInt number
const big_number = 123123123123123n;
console.log(typeof(big_number));

/*
Non-Primitive Datatypes
Arrays
Objects
Functions
*/

// Array structure
// Arrays are type of Objects in Javascript
const heroes = ["Spiderman","Batman","Daredevil","Punisher"];
console.log(heroes);
console.log(typeof(heroes));

//storing array as per key:value pairs
let arr = {
    name: "sourav",
    age: 18,
    roll:"A104",
};

console.log(arr);
console.log(typeof(arr));

//**********Creating a Function**************//

/*
Creating a Function and Storing in a Variable

Javascript uses "function" keyword to declare a function
In the below code we are storing the output of the function in "Print" variable
*/

const Print = function(){
    console.log("Hello World");
}

// Hello World will print
// undefined will also print because Javascript requires to return something
console.log(Print());

// Print = function datatype
console.log(typeof(Print));
