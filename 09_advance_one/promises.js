// Promises represent the eventual completion (or failure) of an asynchronous operation

const promiseOne = new Promise(function(resolve, reject) {
    // Simulating an async task (e.g., network request, cryptography, etc.)
    setTimeout(function() {
        console.log("Async Task is complete");
        resolve();  // Resolve the promise
    }, 1000);
});

// Handling the resolved promise with .then()
promiseOne.then(function() { 
    console.log("Promise Consumed");
});

// Creating and consuming a promise in a single step
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Task 2");
        resolve();
    }, 2000);
}).then(function() {
    console.log("Async to Resolve");
});

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "sourav" }); // Resolving with an object
    }, 1000);
});

promiseThree.then(function(user) {  // Receiving resolved data
    console.log(user); // { username: "sourav" }
});

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false; // Change to false to test successful resolution
        if (!error) {
            resolve({ username: "bose", pass: 123 });
        } else {   // Reject the promise if there is an error
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

// Handling promisefour resolution and rejection
promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .catch((error) => {  // Handling rejection
        console.error(error);
    });


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"sbose",pass:12345});
        }
        else{
            reject("Error: Javascript went Wrong");
        }
    },1000);
});

//Handling promisefive resolution and rejection

//sometimes promises are not resolved we can use async then
//async response needs to be in try-catch block for exception-handling
async function consumePromiseFive(){
    try{
        const response = await promiseFive  //promise = object
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFive();