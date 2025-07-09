// learning more about DOM Manipulation
// learning how to insert elements in js
// learning how to append elements in js
// learning how to delete elements in js



// to insert elements using js
// first we need to create the particular element
// then appened that created element to our html page
// to append the new created element first select the element where you want to insert the created element
// append attaches the new created element at the end of the selected element its appended with

let newButton = document.createElement('button');   // creating a new button element
console.log(newButton);

// listing new created button object properties
console.dir(newButton);

newButton.innerText = 'Click Me!';  // creating text content for the button element

// types of appending
/*

node.append(element) -> attach element at the end of the node (inside)
node.prepend(element) -> attach element at the start of the node (inside)
node.before(element) -> attach element just before the node (outside)
node.after(element) -> attach element just after the node (outside)

*/


let div = document.querySelector('#box');   // selecting div element
div.append(newButton);  // appending new button to div element's end (inside)

// div.prepend(newButton);  // append new button to div element's start (inside)

//div.before(newButton);  // append new button just before div element (outside)

//div.after(newButton);   // append new button just after div element (outside)



let heading1 = document.createElement('h1');    // creating h1 element
let body = document.querySelector('body');  // selecting the body element

body.style.backgroundColor='pink';  // giving background color to body element

heading1.innerText = 'Heading1 Element Created !!!';    // text content given
heading1.style.backgroundColor='#414141';   // background color given
heading1.style.color='white';   // font color given

body.prepend(heading1); // append heading1 element to body node's start (inside)
