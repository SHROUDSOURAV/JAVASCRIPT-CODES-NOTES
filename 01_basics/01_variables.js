/*
const = constant 
used to fix a value of something which cannot be changed
reassigning the variable will give error
*/
const accountId = 1358;
console.log(accountId);

/*
2 types of variables in Javascript. They are :-
var, let

var = variable 
has scope related issues (block and functional)
do not use var in Javascript (prefered for good practice)
*/
var accountPassword = "12345";
console.log(accountPassword);

/*
let = variable (used in current generation of Javascript coding)
does not have scope related issues like var
*/
let accountEmail = "hello@gmail.com";
console.log(accountEmail);

/*
variable declared below but not initialized
you can print the variable to check what value it shows
it will show undefined since we have not assigned it any value
*/
let accountState;
console.log(accountState);
