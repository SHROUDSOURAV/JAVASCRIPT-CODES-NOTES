// DOM is a tree like structure where we can access HTML inside JS


// window is a global object created by the browser itself
// when the browser window is open browser automatically creates the window object
// console.log(), aler() .etc. are functions which are present inside the window object
// that is why even if window is not defined in our js script we call use it

console.log('hello');

console.log(window);

window.console.log('hello world');

// inside the window object 
// there is a document object
// we can use the document object to access our HTML page and its elements
// console.log(document) -> get the HTML code 
// console.dir() -> list the object properties 


// list document object properties inside the window object
console.dir(document);   

// list body object properties inside the document(HTML)
console.dir(document.body);

// printing html body code
console.log(document.body);

// list the h1 object properties inside the document(HTML)
console.dir(document.body.childNodes[1]);

//dynamically change background color using DOM concept
// document.body.style.background = 'green';

// changing the content of h1 tag in HTML
// childNode because inside the body tag
// 1 is the index amongst other childNodes
document.body.childNodes[1].innerHTML='DOM JS';

