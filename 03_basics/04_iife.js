//Immediately Invoked Function Expressions (iife)
//used to avoid global scope pollution in Javascript

(function display(){
    console.log("Database Connected");
})();

//(function_definition)(function_execution)
//semi-colon is necessary to end after the execution is over