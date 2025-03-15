//map function in js
//map function automatically returns value
//adding +10 to each element in array(arr) using map function in Javascript
//if scope opened we need to explicitly use "return" keyword
//otherwise it is ommited
const arr = [1,2,3,4,5,6,7,8,9,10];

//each element from arr(array) taken
//and 10 is added and stored in array(new_arr)
//and displayed
const new_arr = arr.map( (num) => num + 10);

console.log(new_arr);


//Chain mapping in Javascript
//result of the first map is passed to the adjacent map
//for further calculation or processing
//array_name.map( () => ).map( () => )

//10 is multiplied to each element of original array(arr)
//then 10 is added to each element after 10 is multiplied 
//Demonstrating Chaing Mapping
const new_arr2 = arr.map( (element) => element*10)
                    .map( (element) => element+10)

console.log(new_arr2);    

//reduce operation in Javascript
//requires accumulator value and item
//returns the accumulated value

//arr2 => array of objects
//objective => adding all price elements
const arr2 = [
    {
        itemName:"a",
        price:10
    },
    {
        itemName:"b",
        price:20
    },
    {
        itemName:"c",
        price:30
    }
]

//accumulated price using reduce returned
//in totalPrice
/*
<======basic syntax of reduce function=========>
array_name.reduce(accumulator, array) => accumulator + array.property, 0);
*/
const totalPrice = arr2.reduce( (acc,item) => acc+item.price,0)

console.log(totalPrice);