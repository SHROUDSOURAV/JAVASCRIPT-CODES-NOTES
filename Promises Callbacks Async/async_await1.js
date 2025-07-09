// async-await in js
// helps in asynchronous coding
// async-await > promises > callback
// async is used with functions
// always returns a promise
// to use async-await we need the function to return promises or else ...
// the first function call will display after the delay and then all the rest will execute immediately
// we want to execute one after the other maintaining the delay so we use await and promises 

// this function returns a promise
// since its a async function
async function hello(){
    console.log(`hello world`);
}

hello();


function api(){
    // retunring a promise
    return new Promise((resolve, reject) => {
        // 2 second delay
        setTimeout(() => {
            console.log(`weather data`);
            // fullfilling a promise after executing the console part
            resolve('success');
        },2000);
    });
}


async function getWeatherData(){
    // await -> pauses the execution of its surrounding async function until the promise is settled
    // await can only be used inside async functions

    // api(); calling the api() function like this will not display the result
    // because getWeatherData() is not waiting for the setTimout() delay which is 2 seconds .... getWeatherData() moves on
    // this is where await comes in...
    // await pauses the getWeatherData() function execution until the promise is settled(resolved or rejected)
    // await makes the getWeatherData() wait untill the 2 second delay has passed and the promise is settled

    await api();

    // we can call api() again
    // again there will be a 2 second delay

    await api();
}

getWeatherData(); // calling the asynchronous function




function getData(dataId, getNextData){
    return new Promise((resolve, reject) => {
        // 6 second delay
        setTimeout(() => {
            console.log(`dataId => ${dataId}`);
            // resolve is required because without promise resolving await will keep waiting and not move on
            resolve('success');
        },4000);
    });
};



// using the async-await concept to apply asynchronous coding on the above function
// there is 4 second delay in the getData() function


// we need a async function
// there use await and call the getData() function


async function callData(){
    await getData(1);       // 4 second mark waits for the promise resolve then prints dataid
    await getData(2);      // 8 second mark  waits for the promise resolve then prints dataid
    await getData(3);     // 12 second mark  waits for the promise resolve then prints dataid
    await getData(4);    //  16 second mark  waits for the promise resolve then prints dataid
    await getData(5);   //   20 second mark  waits for the promise resolve then prints dataid
}

callData();