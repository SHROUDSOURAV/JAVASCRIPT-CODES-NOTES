// selecting all divs having class .box
let divs = document.querySelectorAll('.box');

// print the text content before changing
for(i of divs){
    console.log(i.innerText);
}


// changing text content of those 3 divs individually
divs[0].innerText = 'child1';
divs[1].innerText = 'child2';
divs[2].innerText = 'child3';

// print the text content after changing
for(i of divs){
    console.log(i.innerText);
}