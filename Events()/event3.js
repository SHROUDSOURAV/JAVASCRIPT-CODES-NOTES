// event listener in js
// node.addEventListener(event, callback)   
// event = mention event type
// callback = function passed as argument in another function
// callback is basically the event handler

let button1 = document.querySelector('#bt1');   // selecting button having id=bt1;

// addEventListener listens when a particular event is triggered
// event listeners can be used multiple times and their callbacks can be different
// the event type it listens for is click on button having id=bt1
// we are using arrow function which is the callback/event handler
// after clicking the button once the arrow function is executed
button1.addEventListener('click', () => {
    console.log('Button Clicked once!');
})

let button2 = document.querySelector('#bt2');   // selecting button having id=bt2


// event type = dblclick (double click)
// callback is the arrow function part
button2.addEventListener('dblclick', () => {
    console.log('Button Clicked twice!!');
})


let div = document.querySelector('div');    // selecting div

// listens for event when mouse hovered over the div area
div.addEventListener('mouseover', () => {   
    console.log('mouse hovered inside div area!!!');
})


// now let's remove an event
// to remove an event we need to store the callback function in a variable
// then pass the callback function variable to the removeEventListener function

let handler2 = () => {
    console.log('button1 event handler2!');
} 

// button1 one click event
// handler2 = function passed as argument (callback function)
button1.addEventListener('click', handler2);

// removing the event
// the event we need to remove should have the same reference (memory address)
// each callback has different memory addresses
// after removing the event the handler2 will no longer exist so will not be executed
button1.removeEventListener('click', handler2); 