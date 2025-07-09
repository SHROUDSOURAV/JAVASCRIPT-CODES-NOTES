// learning more about functions in js
// forEach works with Arrays(data structure)
// forEach is either Higher Order Functions/  Higher Order Methods
// if there is a callback function then it is a higher order function
// higher order functions take function as parameter or return a function

function abc(){
    console.log(`print abc`);
}

// callback function
function test(abc){
    return abc;
}

test(abc());    // passing a function as parameter
                // functions are also treated as normal variables in js


// this concept of passing a function as argument to another function is called callback


let arr = [10, 20, 30, 40, 50];

// forEach() doesn't need to be called
// execution is done automatically
// myFunction is the internal callback function because its passed as argument inside forEach()
console.log("xxxxxxxxxxxx forEach() 1st time xxxxxxxxxx");
arr.forEach(function myFunction(value){
    // value in the myFunction parameter an the element passed from array(arr)
    console.log(value);
});

// another way to write the forEach is below
// using the arrow 
console.log("xxxxxxxxxxxx forEach() 2nd time xxxxxxxxxx");
arr.forEach((value) => {
    console.log(value);
})

