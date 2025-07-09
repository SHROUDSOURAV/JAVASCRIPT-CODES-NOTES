// arrays in js can literally store anything
// functions , numbers, null, objects .etc.
// its a data structure

// learning about foreach, filter, find, indexOf

let arr = [1,2,3,4];

// <================== forEach() ======================>
// using arrow function in forEach()
// item is basically one element from the array
// the element changes in each iteration
// arr.forEach((item) => {
//     console.log(item);
// });

// forEach() using normal function
arr.forEach(function(item){
    console.log(item);
});


// <======================= map() =======================>
// goes to each element of the array just like forEach()
// performs some calculations and returns a new array with the result 
// the size of the new array and the original array is same
// we need to assign a variable to this map() function since the new result is returned in a separate new array
let newArr = arr.map(function(item){
    return item;    // basically returning each element of array(arr) to new array(newArr) using map() function
                    // we need to return the results into the new array
});

console.log(newArr);


// the above map() logic using arrow function
// let newArr2 = arr.map((item) => {
//     return item;
// });
// console.log(newArr2);


// <======================== filter() ===========================>
// filter() used when we want to perform operations or select certain elements from the array
// we filter those category of elements and perform our task
// when the resulting array can be smaller or equal to the size of the original array we use filter()
let newArr2 = arr.filter(function(item){
    if(item > 3)
        return true;    // we need to return 'true' to return the results into the new array
                        // if true is not returned, then false is returned by default
});

console.log(newArr2);

// performing the above task using arrow function
// let newArr3 = arr.map((item) => {
//     if(item > 3){
//         return true;
//     }
// });
// console.log(newArr2);


// <=========================== find ==========================>
// helps to find a certain element inside the array
// stores the first occurence of the found element from the original array to a variable
let newArr3 = arr.find(function(item){
    if(item === 3)
        return item;
});

console.log(newArr3);

// arrow function implementation of find() 
// let newArr4 = arr.find((item) => {
//     if(item === 3){
//         return item;
//     }
// });
// console.log(newArr4);


// <========================= indexOf ====================>
// we use indexOf to look for the index of the element we specify
// it returns the index of the first occurence of the element we specify 
// if indexOf() returns -1 then the element doesn't exist inside the array
// if indexOf() returns anything else (other than -1) then element exists inside array
console.log(arr.indexOf(55));   //returns -1 because 55 doesn't exits in array(arr)
console.log(arr.indexOf(2));    // returns the index of element(first occurence) 2 inside the array(arr) because it exists