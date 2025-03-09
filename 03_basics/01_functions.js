/*
Functions in Javascript 
used to reduce lines of code and better code readability and efficiency
{} = function scope
Below is an example
*/

//function definition
function print(){   //non parameterized function
    console.log("Hello World");
}

//executing the function
print();

//function to add 2 numbers
function add(num1, num2){   //parameterized function
    return num1 + num2;
}

console.log(add(10,20));    //passing 10 and 20 arguments for num1 and num2 parameters

//another function example using return statement and backticks(``)
function isLoggedIn(username){
    return `${username} just logged in`;
}

console.log(isLoggedIn("Sourav Bose"));