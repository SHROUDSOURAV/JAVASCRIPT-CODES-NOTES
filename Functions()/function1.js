// functions are a block of code that perfom a specific task 
// functions can be called/invoked whenever need
// function syntax in js ----->
/*

function <function name>{
    ...........
    ...........
    body of the function
    ...........
}
*/
// function -> is the keyword 


// HelloWorld() function
function HelloWorld(){
    console.log(`This is my function\nHello World!!!`);
}   

HelloWorld();   // calling the function (can be called infinite times)
HelloWorld();   // calling the function again...


function myMessage(msg){
    console.log(`${msg}`);
}

// calling function and passing value
myMessage('nothing is good');  
myMessage(12123);   

// learning about return statement
function mySum(a,b){
    // a and b are local variables
    // their scope is only within this function scope 
    // a, b declared outside the scope are different and have different memory addresses/locations
    return a + b;
}

// we call the function mySum() and pass 10 and 20 as parameters
// return a + b basically adds 10 + 20 and returns 30 
// the 30 is printed using console.log()
console.log(mySum(10,20));

