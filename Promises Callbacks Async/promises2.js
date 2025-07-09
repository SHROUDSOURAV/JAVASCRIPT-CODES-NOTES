// promises
// .then() and catch() 
// promise.then((res) => {...})   => what to do when the promise is fullfilled
// promise.catch((rej) => {...})  => what to do when the promise is rejected

function getPromise(){
    return new Promise((resolve, reject) => {
        // promise fullfilled
        // and promise is then returned
        resolve('success');
    });
};

let promise = new getPromise();
promise.then((result) => {
    console.log(`promise is fullfilled => ${result}`);
});

// resolved/fullfilled promise object is printed
console.log(promise);


function getPromise2(){
    return new Promise((resolve, reject) => {
        reject('error');
    });
};

// creating new promise object
let promise2 = new getPromise2();


promise2.then((result) => {
    console.log(`promise is fullfilled`);
})

// used to handle rejected promises 
promise2.catch((error) => { 
    console.log(promise);
})


function asyncFunc(){
    return new Promise((resolve, reject) => {
        // set a delay of 5 seconds in the execution of the asyncFunction()
        // promise is resolved/fullfilled
        setTimeout(() => {
            console.log(`some data`);
        },2000)
        resolve('success');
    });
};


// aysnc1 returns a promise and is stored in p1
// p1.then() used when the promise is handling resolve where the promise is basically fullfilled and what to do after that
let p1 = asyncFunc();
p1.then((resolve) => {
    console.log(`${resolve}`);
})

// promise chaining
// The function is called immediately, 
// but the code inside setTimeout() runs after the delay 
// this means the surrounding logic does not wait for the delay to finish.
function async1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching async1 ....');
            resolve('success');
        },5000);
    });
};


function async2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching async2 ....');
            resolve('success');
        },5000);
    });
};

// if we want to fetch async1 function then async2 
// then we use promise chaining
// async1 is called then 5 second delay then prints async1 console part
// async2 is called then 5 second delay then prints async2 console part
// this is promise chaining
// one promise chained with another promise

// resolve inside the setTimeout() triggers .then which contains the code
// about what to do if promise is fullfilled/resolved
let a1 = async1();
a1.then((resolve1) => {
    let a2 = async2();
    a2.then((resolve2) => {});
});


// using the promise chaining concept on the below code
function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        // 6 second delay
        setTimeout(() => {
            console.log(`dataId => ${dataId}`);
            resolve('success');
        },6000);
    });
}


// below is callback hell
// getData(111, () => {    // callback1
//     getData(222, () => {    // callback2
//         getData(333);   // just calling the function
//     });
// });


// using the promise chaining concept 
// called at 6 second delay
// using promises
// getData(1) returns a promise
// resolve inside the setTimeout triggers .then() where the p1 resolve is printed
// we use promise chaining to solve the callback hell issue in the below code


getData(1).then((resolve1) => {
    getData(2).then((resolve2) => {
        getData(3).then((resolve3) => {
            getData(4).then((resolve4) => {
                getData(5).then((resolve5) => {});
            });
        });
    });  
});