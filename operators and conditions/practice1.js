//input number from user and check if its multiple of 5 or not
let num = prompt("Enter the Number : ");    // prompt only works with browser APIs so i have created practice1.html
                                            // practice1.js is connected with practice1.html

// check the result in the browser console
// inspect and go to console using devtools                                        
if(num % 5 === 0){
    console.log(`${num} is a multiple of 5`);
}
else{
    console.log(`${num} is not a multiple of 5`);
}