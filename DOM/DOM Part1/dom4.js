// accessing div in the dom4.html page
let div = document.querySelector('div');

console.dir(div);

// to see only the text contents of div
// innerText only shows the text not the child node tags
// div.innerText;
/*
    
    <-------- output ------>
    div.innerText;
    'Fruits\nMango\nOrange\nLichi'

*/

// to see the text content + child node tags of div
// innerHTML is used
// div.innerHTML;

// to see hidden elements and their content
// works just like innerText but also shows hidden elements
// textContent is used
// div.textContent;
/*
    <--------- output --------->
    div.textContent;
    '\n        Hidden Heading\n        Fruits\n        \n            Mango\n            Orange\n            Lichi\n        \n    '

*/