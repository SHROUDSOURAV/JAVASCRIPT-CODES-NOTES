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


/*fetch in Javascript
The Fetch API is a modern interface in JavaScript that allows you to make HTTP requests. It replaces the older XMLHttpRequest method and provides a cleaner and more flexible way to fetch resources asynchronously. The Fetch API uses Promises, making it easier to work with asynchronous data.
Fetch returns a promise.

Fetch does two opearations 
1) one part goes to allocate memory for data to store
2) another part goes to make requests to retrieve data

if request is made then it goes to resolved(sucessfull/unsucessful)
otherwise goes to reject

after request / rejection the data is stored as response which is global variable
*/


fetch('https://api.github.com/users/SHROUDSOURAV')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

