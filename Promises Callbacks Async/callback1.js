// synchronous callback functions
// callback is a function which is passed as argument in another function   

function sum(a,b){
    console.log(a+b);
}

// sumCallBack is the local name for the sum() function
// local function name for sum() in the calculator() function scope
function calculator(a,b, sumcallBack){
    sumcallBack(a,b);
}

// sum is the callback function
// passed as argument in another function(calculator())
// passing the callback function shouldn't have any parenthesis(), only function name
calculator(10,20,sum);