let newbutton = document.createElement('button');  

newbutton.innerText = 'Click Me!';
newbutton.style.backgroundColor='red';
newbutton.style.backgroundColor='white';

let body = document.querySelector('body');

body.prepend(newbutton);