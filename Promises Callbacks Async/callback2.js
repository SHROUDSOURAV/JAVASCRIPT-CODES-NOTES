// asynchronous callback
// callback is a function which is passed as argument in another function


// we will be using setTimeout() function to delay execution of the function 
function callback(){
    console.log(`hello world`);
}

// we then used setTimeout() to delay the execution of the callback() function by 5000 milliseconds/5 seconds
// to demonstrate asynchronous callback
// any function passed as parameter to another function is called a callback function
setTimeout(callback,5000);