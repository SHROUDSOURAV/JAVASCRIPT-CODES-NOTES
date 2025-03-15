//Array for_each function 
//does not have a return type
/*
array_name.forEach( (args1) => {
    statement....
    .............
})
*/

const arr = ["c","c++","js","ruby","java","python"];

const values = arr.forEach( (item) => {
    console.log(item);
})


//filter operation to filter results from the array
//filter operation returns a value unlike for_each function
//we need to mention condition for using filter 
//if using scope => {} we need to mention the "return" keyword explcitly
/*
array_name.filter( (args1) => 
    condition...
)
*/
const numbers = [1,2,3,4,5,6,7,8,9,10];

//filtering numbers greater than 4
const new_numbers = numbers.filter( (num) => num > 4);

console.log(new_numbers);   //new_numbers will be in array format

const new_arr = [];
//using array_name.forEach() opearation
//to do the above task
numbers.forEach( (values) => {
    if(values > 4)
        new_arr.push(values);
})

console.log(new_arr);



