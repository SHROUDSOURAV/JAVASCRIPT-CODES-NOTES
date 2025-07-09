// callback hell is basically nested callbacks stacked below one another forming a pyramid structure


function getData(dataId, getNextData){
    // 2 second delay
    setTimeout(() => {
        console.log(`datId => ${dataId}`);
        // getNextData() is the callback function
        // if getData() is not passed but there is getNextData() in the arguments
        // to handle such a scenario we are using the if condition... if getNextData() present then execute it
        // else print the dataid only
        if(getNextData){
            getNextData();
        }
    },2000);
}

// we need to pass the getData() function as the second parameter
// we calling the same function within the function
// but passing arguments in function and passing that function is not allowed
// so we will use arrow function because it will not be executed directly
// we use arrow function to pass our callback function
// args1 => id
// args2 => callback function(which is basically the function itself in this case/scenario)
// the arrow function => doesn't immediately execute ... since its the callback function it executes after a delay of 2 seconds
getData(1, () => {
    getData(100);
});


// working process
// 0second -> calls getId function
// waits for 2 seconds
// then prints the dataid which is 1 as passed above
// calls getid with id passed as 100
// waits again for 2 seconds 
// then prints dataid 100


// these arrow functions don't execute immediately
// they are waiting for the setTimeout delay of 2 seconds mentioned above
// when the 2 seconds timer ends the next callback is executed
// if we keep adding such arrow functions or callbacks that creates a callback hell!!!
getData(111, () => {    // callback1
    getData(222, () => {    // callback2
        getData(333);   // just calling the function
    });
});


// to demonstrate callback hell 
// we need the callback function
// that is why we need a second parameter
// but we don't want to run it immediately
// so we need to use arrow function which will wait up till the setTimeout() mentioned delay then execute itself
function display(fname, callback){
    setTimeout(() => {
        console.log(`${fname}`);
        if(callback){
            callback();
        }
    },3000)
}

// display function called at 3 seconds delay
// used the callback hell concept
// passing the () => {...} as callback
// and the arrow function consists the code
display('sourav', () => {   //callback1
    display('bose', () => { //callback2
        display('lengen...wait for it....', () => { //callback3
            display('dary😎');  // just calling the function
        });
    });
});