// Sync in js
// sync and async
/*
synchronous -> code runs in parituclar sequence of instructions 
            each instruction waits for the previous instruction to complete its execution
*/

// all the below instructions execute sequentially
console.log('one'); // executes first because first instruction in the sequence
console.log('second');  // waits for execution of the previous instruction before executing itself
console.log('three');   // waits for execution of the previous instruction before executing itself(executes last because last instruction)


// this is basically synchronous coding