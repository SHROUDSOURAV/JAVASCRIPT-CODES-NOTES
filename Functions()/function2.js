// learning more about functions in js
// learning about arrow functions =>


// syntax of arrow functions --->
/*

const <function variable name> = (args1, args2, ....) => { 
    .....body of the function ...
    .............................
    .............................                                
};

*/
// the function variable stores the result of the arrow function
// example is below

const sum = (num1, num2) => {
    return num1 + num2;
};

// calling the arrow function
// passing 10 and 20 as arguments of the function
console.log(sum(10,20));    


// another arrow function example below
// the below arrow function doesn't need any arguments to pass
const hello = () => {
    console.log("hello world");
};


hello();
