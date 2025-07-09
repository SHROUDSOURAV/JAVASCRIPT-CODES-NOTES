// Learning more about selecting elements in JS
// DOM Maniputlation
// query Selector to select HTML elements
// we can pass class, id or tag name in the query Selector, it will automatically detect it

// selecting the first p tag using query Selector
let ptag = document.querySelector('p');

// print response code of the first p tag element
console.log(ptag);

// list p tag object properites
console.dir(ptag);

// selecting all occurences of p tag 
// query Selector returns NodeList
// all the elements in HTML accessing them through js according to DOM becomes a node
let ptagAll = document.querySelectorAll('p');

console.log(ptagAll);
console.dir(ptagAll);


// changing, setting values of an element using querySelector()


let button = document.querySelector('#button1');

//finding tag name of an element
console.log(button.tagName);

//printing the child nodes or children of the parent node(body tag)
// increasing the nodes of the body tag will increase the length of the HTML collection length 
console.log(document.querySelector("body").children);


let body = document.querySelector('body');

// firstChild.nodeName will give #text node if there are whitespaces between parent and childnode
// so use firstElementChild.nodeName to access the first child node of the parent node (body)
console.log(body.firstElementChild.nodeName);


// change background color of body (parent node)
// document.querySelector('body').style.background='<colorname>'

// selecting individual child nodes of parent node (body)
let firstChild = body.children[0];
let secondChild = body.children[1];

console.log(firstChild);
console.log(secondChild);

// changing their background color
firstChild.style.background='green';
secondChild.style.background='orange';

