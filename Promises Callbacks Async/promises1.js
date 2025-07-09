// promises are for eventual completion of task. It is an object in JS
// promises are a solution to callback hell
// there are 3 states of promise
// pending, fullfilled/resolved, rejected

// resolve => promise is fullfilled
// reject => promise is fullfilled but will give error
// resolve and reject are 2 handlers of the promise
let promise = new Promise((resolve, reject) => {
    console.log(`I am a Promise fullfilled`);
    resolve(100);  // fullfilling the promise
                // we can return a value in resolve()
                // resolve() changes the state of the promise
                // 100 => the promise result we are returning...it can be string as well...
});

// resolved/fullfilled promise
console.log(promise);

// pending promise
let promise2 = new Promise((resolve, reject) => {
    console.log(`I am a Promise pending`);
})

console.log(promise2);  // prints pending promise object


let promise3 = new Promise((resolve, reject) => {
    console.log(`I am a Promise rejected`);
    reject('404');    // generates an error and returns 404 
})

console.log(promise3);  // prints rejected promise object


function getData(dataId, getNextData){
    // returns the promise on the specified setTimeout() delay 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`data => ${dataId}`);
            // returns promise as fullfilled after completion of setTimeout() delay 
            resolve('success');
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}

/*
OUTPUT IN CONSOLE
<================>
let result = getData(123);
undefined
result
Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "success"
promises1.js:39 data => 123
result
Promise {<fulfilled>: 'success'}

*/

function 