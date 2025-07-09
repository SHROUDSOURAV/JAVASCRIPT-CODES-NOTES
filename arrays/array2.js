//learning more about arrays in js
// push() -> to add elements in array at the end
// pop() -> to delete elements in array from the last index
// toString() -> converts array to string


let arr = [10,20,30,40,50];

console.log(`Orginal Array -> ${arr}`);

arr.push(100);  // adds 100 to the last index of array

console.log(`Array after pushing element -> ${arr}`);

arr.pop();  // deletes 100 from the last index of array

console.log(`Array after popping element -> ${arr}`);

//now let's convert the array to string array
arr = arr.toString();

console.log(arr);


