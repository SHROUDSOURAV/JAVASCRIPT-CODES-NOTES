// DOM Manipulation
// learning to set attributes and get attributes
// learning to manipulate style and its attributes

// accessing the div 
let div = document.querySelector('#box');
console.log(div);

// getting the attribute value of the div element/node
let id = div.getAttribute('id');    // getting the id value of div
console.log(id);

// accessing other attributes of div element
let name = div.getAttribute('name');
console.log(name);

// accessing the class value of <p> element
let pClass = document.querySelector('p').getAttribute('class');
console.log(pClass);


// setting attribute value


//setting attribute value to the <p> tag/element
let p = document.querySelector('.para');    // selecting p element
p.setAttribute('class','newClass'); // setting new attribute value
console.log(p.getAttribute('class'));   


// manipulating style of div
// changing the background color of div element using dom manipulation in js

let div2 = document.querySelector('#box');  // selecting the div element
div2.style.backgroundColor='red';   // changing background color of div element dynamically
div2.style.color='black';   // changing font color of div element dynamically
div2.style.fontSize='20px'; // changing font size of div element dynamically
div2.innerText='hello'; //changing text content of div element dynamically


// to hide the div element dynamically
// we can use style property in js
// div2.style.visibility='hidden';