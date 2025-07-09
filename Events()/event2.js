let button1 = document.querySelector('#bt1');   //selecting button with id=bt1

// arrow function
// triggered when button clicked once
button1.onclick = (event) => {
    console.log(event); // print event object
    console.log(event.type);    // print event object type
    console.log(event.target);  // print event target (the element which upon clicking triggers this event)
};


let button2 = document.querySelector('#bt2');   //selecting button with id=bt2

button2.ondblclick = (event) => {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
}


let div = document.querySelector('div');    // selecting div element

div.onmouseover = (event) => {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
}