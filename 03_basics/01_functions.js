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

/*
... = can be spread operator or rest operator depending on usage
the below code will return all the passed arguments in array structure
*/
function add2(...num1){
    return num1;
}

//check the output. It's in array structure
console.log(add2(10,20,30));

/*
Now let's create an object and call it's properties
using a custom function and learn how to deal with 
objects and functions together
*/

//object created
const object = {
    username: "coder",
    id: "21A8"
}

//function taking object as parameter
function getDetails(obj){
    console.log(`Username is ${obj.username} and ID is ${obj.id}`);
}

//passing object as argument in function call
getDetails(object);

//function to take array as argument and print it

const arr1 = [10,20,30,40,50];
function display(arr){
    for(i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

display(arr1);