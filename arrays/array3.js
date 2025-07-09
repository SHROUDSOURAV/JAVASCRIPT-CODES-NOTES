//learning more about arrays
//concat(), unshift(), shift() function

let arr1 = [10,20,30,40,50];
let arr2 = [100,200,300,400,500];


// concat() -> joins multiple arrays
// concatenating arr1 and arr2 elements 
// no changes done to arr1 and arr2 arrays 
// console.log(arr1.concat(arr2));  

//but if i write concat() like the below code
//original array will change

arr1 = arr1.concat(arr2);

console.log("xxxxxxxxxxxxx arr1 after concat() xxxxxxxxxxxxxx");
console.log(arr1);


//insert element at the start of the array
//or insert element at array index 0
//unshift() inserts new element at the start of array and returns new array length;
arr1.unshift(55);

console.log("xxxxxxxxxxxxx arr1 after unshift() xxxxxxxxxxxxxx");
console.log(arr1);


//delete element from start of the array
//or delete element at the array index 0
//shift() deletes array element from array index 0 and returns new array length

arr1.shift();

console.log("xxxxxxxxxxxxx arr1 after shift() xxxxxxxxxxxxxx");
console.log(arr1);


