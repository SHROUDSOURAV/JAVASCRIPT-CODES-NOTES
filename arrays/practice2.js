// given array [250, 645, 300, 900, 50]
// all items have 10% off on them
// change the array to store final price after applying offer


let items = [250, 645, 300, 900, 50];
let items2 = [];
let index=-1;

// copying elements of array(items) to array(items2)
items2 = [...items];

let finalPrice = 0.0

//using for loop
for(let i=0; i<items.length; i++){
    items[i] = items[i] - (items[i]*0.1);   // deducting 10% from each item and storing new value in array
}

console.log(items);

let j=0;
//using for of loop
for(let i of items2){
    items2[j] = items2[j] - (items2[j]*0.1);
    j++;
}

console.log(items2);