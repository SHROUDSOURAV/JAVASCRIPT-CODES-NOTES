// learning about for of , for in loops

// for of loop
// for of loop can be used to iterate strings, arrays, sets, maps NOT objects!!!
// let's say there is a string "sourav"
// now if I want to iterate through each character individually i will use for of loop
// syntax => for(let <variable> of <string variable>){ statement....}
console.log("xxxxxxxxxxxxx for of loop xxxxxxxxxx");
let fname = "sourav";
let count = 0;
for(let i of fname){        // i need not be initialized in for of loop
    console.log(i);          // i need not be incremented as well unlike for, while, do-while loops...
    count++;    // counting characters in the string "sourav"
}
console.log(`Length of fname => ${count}`);


// creating an student object
// using for in loop to print each key in the object
const student = {
    fname:'sourav',
    lname:'bose',
    department:'bca',
    section:'E'
};
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx for in loop xxxxxxxxxxxxxxxxxxxxxxxx");
console.log("xxxxxxxxxxx object keys xxxxxxxxxx");
for(let key in student){
    console.log(key);   // prints key of the student object in each iteration
}


// now printing the value of the key
// using for in loop to print the values as per the key of the object
console.log("xxxxxxxxxxxx object values xxxxxxxxxxxxxx");
for(let value in student){
    console.log(student[value]);
}