// line by line code runs sequentially is called synchronous
// if the code is async in nature put it in side stack/event queue and excute code sync in nature and only after completing the sync code check if the async work is done and then bring it into the main stack
// async basically starts all the tasks and returns the result of the task which gets completed
// side stack/event queue basically contains async code (xmlhttp requests, setTimeout, setInterval .etc.)

// the below items used in async coding

//<--------------- below functions are used to sent requests to the server(we are let's say using to get data) ----------->
// setTimeout
// setInterval
// promises
// fetch
// axios
// XMLHttpRequest
// async-await


// <------------ below items used to receive the data if the data is received from the server after request was made ---------->
// then
// catch
// callbacks
// async-await


// rest other than the above items are sync coding

// sometimes when a part of the code depends on the response given by the server and how much time is that going to take we cannot say with certainty, in that case we cannot use sync code because it will stop the execution of other tasks as long as it(itself) does not get fullfilled, so we use asyn coding in that scenario

// async code is taken in side stack/event queue
// sync code is executed by main stack
// when main stack and only when main stack is empty, side stack/event queue is checked and async code is brought to main stack and executed
// this communication between side stack/event queue and main stack is done with the help of event loop
// stuff from side stack/event queue is brought to main stack using the help of event loop


// <========== async code working =============>
// sync code runs
// meets async code ---> processes it on the side stack/event queue
// executes rest of the sync code immediately
// when the async code processing is done executes it / display the result as per the code

// setTimeout(<callback/function>, <time in milliseconds>);

// example 1
// 1 3 4 5 gets printed immediately while 2 is printed after 2 seconds are over
console.log('1');
setTimeout(function(){
    console.log('2');
},2000)
console.log('3');
console.log('4');
console.log('5');


// setTimeout(<callback function>, <time in milliseconds>)
// after the time ends the callback function will be executed
// 