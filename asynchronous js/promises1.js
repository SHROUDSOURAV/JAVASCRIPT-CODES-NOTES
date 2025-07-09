// promises are used in async coding in js
// since promises are used in async coding which basically means a certain code will eventually execute in the future
// there can be 2 responses to the promises' async code
// the 2 responses are -> 1. resolved/fullfilled(promise)  2. reject
// promises are at the pending state at the beginning (since they are neither resolved or rejected at that stage)
// 3 states of promises -> 1. resolved 2. rejected 3. pending

// syntax of promise => new Promise((res, rej) => {});
// res => resolve
// rej => reject
// res, rej arguments about the state of the promise
// new Promise() to create a promise object
// promise needs to be saved inside a variable


// example of promise below (promise resolved)

let promise1 = new Promise(function(res, rej){
    if(true){
        return res();   // returning promise = resolved if condition true ... within () we can return something which is PromiseResult(string,number .etc.)
    }
    else{
        return rej();   // returning promie = rejected if condition false ... within () we can return something which is PromiseResult(string,number .etc.)
    }
});

console.log(promise1);

// when promise is made -> it can be resolved/rejected/pending
// .then() and .catch() are 2 functions which are used when we want to do something if promise is either resolved or rejected
// .then() -> code we want to run if promise is resolved
// .catch() -> code we want to run if promise is rejected

promise1
    .then(function(){
        console.log('promise was resolved');
    })
    .catch(function(){
        console.log('promise was rejected');
    })


// another code on promise
// question -> user asked for a number between 0 - 9 and if the number if below 5 resolve the promise else reject 
// below is the solution code to the problem mentioned above

let promise2 = new Promise(function(res, rej){
    let number = Math.floor(Math.random()*10);  // generates random number between 0 to 9 
                                                // random function generates random number between 0 - 1
                                                // random() * 10 makes the number between 0.xxxx - 9.xxxx
                                                // floor() helps remove those xxxx(decimal points)
                                                // all in all helps generate a random number between 0 - 9
    if(number < 5) 
        return res();
    else
        return rej();
});

promise2
    .then(function(){
        console.log('number below 5');
    })
    .catch(function(){
        console.log('number above 5 ');
    })


// perform promise chaining on the below tasks preferebly in order
// task 1
// task 2 
// task 3 
// task 4

let promise3 = new Promise(function(res, rej){
    return res('task1');
});

promise3
    .then(function(data){
        console.log(data);
        return new Promise(function(res, rej){
            return res('task2');
        })
    })
    .then(function(data){
        console.log(data);
        return new Promise(function(res, rej){
            return res('task3');
        })
    })
    .then(function(data){
        console.log(data);
        return new Promise(function(res, rej){
            return res('task4');
        })
    })
    .then(function(data){
        console.log(data);
    })


// async await
// used in async coding
// if we want to use async-await
// we need to make the function asyn
// to make a function async --> use the keyword async before the function 



// random user API => https://randomuser.me/api/


// before doing the async-await implementation of sending request to the random user API
// lets send request using promise
function abcd(){
    // fetch() returns a promise automatically
    // that is why we can use .then() even if we cannot see any promise here since fetch() itself returns a promise
    // we didn't write resolve() but if the request made to the API was successfull fetch() itself returns resolve() else reject()
    fetch(`https://randomuser.me/api/`)
    .then(function(data){
        // data received from the api i s in raw format
        // raw format is not readable
        // we need to convert the data into readable format
        // readable format => JSON format
        return data.json();
    })
    .then(function(readableData){
        console.log(readableData);
    })
}

abcd();


// now let's do the above code using async-await
// async await
// used in async coding
// if we want to use async-await
// we need to make the function asyn
// to make a function async --> use the keyword async before the function 


async function efghi(){
    // since we don't know how long it will take for the request to reach or the data to receive we use await
    // await works in async functions
    // we use await here becomes without it the line becomes sync code and it doesn't wait for the response sent by the server and procedes to next line
    // but we want to wait until we get the response and then move to the next line to parse response in JSON format
    let response = await fetch(`https://randomuser.me/api/`); //await means wait here until the response/answer from the fetch request is not received    
    // response is raw form 
    // so we need to convert it into readable format
    
    // readable format = JSON
    // we are using await here because without await this line would become sync code
    // and sync code runs in the main stack and it would run before the fetch request and basically show nothing
    // and since response is a promise as fetch returns a promise so it will show pending
    // which means only to run the below code if the fetch request was successful
    let data = await response.json(); // await waits for the previous await to finish and then executes itself
    console.log(data);  
}

efghi();