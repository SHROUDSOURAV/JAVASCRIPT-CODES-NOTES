// async coding
// executes other instructions and returns to the async instruction and executes it 
// doesn't wait for the instruction and prevents execution of other instructions
// sync doesnt wait for async stuff
// sync statements gets executed and then async comes after that

// we use setTimeout() function 


function hello(){
    console.log('hello world1');
}

// now let's say i want to execute the hello function after 5 seconds
// we use setTimeout() function for this
// we mention the delay in milliseconds
// 1 second = 1000 milliseconds
// syntax ===> setTimeout(<function_name>, <delay in time milliseconds>)
// syntax ===> setTimeout(<arrow function>, <delay in time milliseconds>)

// waits 2 seconds / delays execution of the hello() function by 5 seconds
setTimeout(hello, 5000);

// this statement gets executed and doesn't wait for the hello function since it got delayed using setTimeout() function
console.log('bye bye world');

// using arrow function to do the above task
setTimeout(() => {
    console.log('hello world2');
},8000);    // setting timeout to delay the execution of the arrow function by 8 seconds



console.log('one');
console.log('second');

setTimeout(() => {
    console.log('async testing');
},7000);    // prints before hello world2 because exection time is 7 seconds while hello world2's 2 is 8 seconds

console.log('three');