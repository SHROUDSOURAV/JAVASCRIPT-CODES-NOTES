// learning to access an element of HTML using js
// to do that we need to provide id or class or tag to that HTML element/tag
// DOM Manipulation
// Selecting by id
// Selecting by class
// Selecting by tag




// selecting an element by the element's ID
let heading = document.getElementById('heading');   // return h1 (value stored in heading variable)
// printing h1 element value and respective code
console.log(heading);
// list heading variable(h1) object properties
console.dir(heading);

// selecting an element by the element's class name
// returns HTML collection
let heading2 = document.getElementsByClassName('heading2');
// printing h4 element value and respective code
console.log(heading2);
// list heading2 variable(h4) object properties
console.dir(heading2);


// selecting an element by the element's tag name
let ptag = document.getElementsByTagName('p');
// print p tag/element value and respective code
console.log(ptag);
// list p tag object properties
console.dir(ptag);

