// the change in the state of an object/element is known as event in js
// mouse events (one clic, two clicks)
// keyboard events (keypress, keyup, keydown ...etc...)
// form events (submit ...etc...)
// print event ( ...etc...)
// JS event handling > Inline event handling (Priority)

let button1 = document.querySelector('#bt1');   // selecting the on click button

// here button1.onclick is assigned an arrow function 
// clicking the button will execute the instructions present in the function body
button1.onclick = () => {       // arrow function to trigger one click mouse button event
    console.log('button1 is clicked!'); 
};


let button2 = document.querySelector('#bt2'); 

// here button2.ondblclick is assigned an arrow functipn
// clicking the button twice will execute the instructions present in the function body
button2.ondblclick = () => {    // arrow function to trigger two click mouse button event
    console.log('button2 is clicked!');
};


let box2 = document.querySelector('#box2'); // selecting div with id = box2

// here box2.onmouseover is assigned an arrow function
// hovering the mouse over the box2/div area will trigger this event 
box2.onmouseover = () => {
    console.log('mouse hovered over box2!');
};






