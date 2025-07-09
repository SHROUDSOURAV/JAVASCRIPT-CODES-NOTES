// learning more about functions in js
// learning about map() function in js
// learning about filter() function in js
// learning about reduce() function in js
// Syntax -->
/*

    <array name>.map(<callback function>(value, index, array))

*/

let arr = [10, 20, 30, 40, 50];

console.log(`Original Array -> ${arr}`);
// using map to print array(arr) all values/elements
// unlike .forEach() map returns a result and makes a new array so values can be returned
// newArr stores the new array elements returned
/*
 (value) => {
    return value+1;

is the arrow function
*/
// map() does callback to array 
// the result is stored in newArr
// the result returned by map() is a new array formed based on the operations
let newArr = arr.map((value) => {
    return value+1;
});

console.log(`New Array -> ${newArr}`);


// check whether new elements are even or not
// using forEach() and map()


let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// filter() forms a new array based on the numbers which are even
let even = arr3.filter((item) => {
    if(item % 2 == 0){
        return item;
    }
})

console.log(`Even Numbers Array -> ${even}`);


let arr4 = [3,5,8,2,1,10];

// array.reduce(result, current)
// array.reduce() => returns a single value
// result = first element in array
// current = second element in array
// result and current are always adjacent elements
// these values will increase

const max = arr4.reduce((prev, current) => {
    return prev > current ? prev : current;
});

/*

workflow of array.reduce()

Initial Array: [3, 5, 8, 2, 1, 10]

Step 1: (3, 5) => max = 5
Step 2: (5, 8) => max = 8
Step 3: (8, 2) => max = 8
Step 4: (8, 1) => max = 8
Step 5: (8, 10) => max = 10
Final Output: 10

*/


console.log(max);

