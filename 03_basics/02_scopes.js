/*
scopes are basically denoted by curly braces{}
It defines whether certain variables, data members are accessible or not
It can be local variables of a function or global variables accessible throughout the program
*/

const a = 10;
let b = 20;
console.log(a,b);

{   //here I am defining a scope using {}
    const a = 444;  //const a is only accessible withing this scope
                    //and has nothing to do with the outside const a
                    //same logic for const b within this scope
    const b = 555;
    console.log(a,b);
}

//now let's talk about the issue with var
{
    //now num1 is present in this scope and shouldn't print outside but...
    var num1 = 101;
}
//but when num1 is printed it will not show any error
//var is global scoped variable
//so it is better to avoid using var type variables in Javascript
console.log(num1);