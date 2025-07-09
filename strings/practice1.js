// prompt the user to input their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with their fullnane length


let fullName = prompt("Enter the full name : ");

let trimSpaces = fullName.trim();   // removes first and last unecessary spaces

let removeSpaces = trimSpaces.replaceAll(' ','');   // removes spaces between firstname and lastname

let fullNameLength = removeSpaces.length.toString();


let username = '@'+ removeSpaces + fullNameLength;  // concatenation

console.log(`Username Generated --> ${username}`);


