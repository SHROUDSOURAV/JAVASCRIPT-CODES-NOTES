//control flow in js
//if , else, else if statements
//executing certain portion or part of code instead of everything
//based on condition

/*
if(condtion){
    statement...
}
else{
    statement...
}
*/

let value = "true";
//value = true so if condition satisfied
if(value == "true"){
    console.log("VALID");
}
else{
    console.log("INVALID");
}
//value = false so if condition wrong else condition satisified
value = "false";
if(value == "true")
    console.log("VALID");
else
    console.log("INVALID");

// == symbol for equality checking
// === symbol for type checking 


let balance = 500;
if(balance > 100){
    console.log("balance greater than 100");
}
else{
    console.log("balance is less than 100");
}


/*
<=====================NESTED IF CONDITIONS======================>
if(condition1){
    statement1....
}
else if(condition2){
    statement2...
}
else if(condition3){
    statement3...
}
else{
    statement4...
}
*/


/*
<================SWITCH CASE=================>
*/

const month = 3;
switch(month){  //month = switch variable
                //break = stops executing other cases
                //if cases are not matched default is executed
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("INVALID CHOICE!!!");
}

//checking for empty object in Javascript
const obj = {};

//object_variable = obj
//Object.keys(object_variable) returns all the keys of the object in array format
//Then the length of the array is calculated and checked whether its 0 or not
//To find if the object is Empty or Not
if(Object.keys(obj).length == 0){
    console.log("Object is Empty!!!");
}
else{
    console.log("Object is not Empty!!!");
}

//Terniary Operator
let val1 = 100;

val1 < 50 ? console.log("val1 less than 50") : console.log("val1 greater than 50");