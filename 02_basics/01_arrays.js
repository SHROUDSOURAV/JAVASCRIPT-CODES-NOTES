/* Arrays
It is a data structure
contains multiple elements
Values can be specified as per the index value
*/
const arr = [1,2,3,4,5];  //declaring a number array named arr

// printing the all the elements of array
console.log(arr);

//accessing elements as per index value
//index starts from 0 to (element size-1)
console.log(arr[2]);


const heroes = ["spiderman","batman","daredevil","ironman"];
console.log(heroes);

/*
Pushing/Inserting elements in Array
pushed element will be at the last
*/
arr.push(10);   //pushing element 10 in arr array
console.log(arr);

/*
Pop function in array
array_name.pop()
Deletes the last element from the array
*/

arr.pop();
console.log(arr);   //element 10 gets deleted, being the last element

/*
Unshift function in array
Inserts elements at the 0th index 
or the starting position of the array

Disadvantage : All the other elements are needed to be shifted 
               because of that...
*/

arr.unshift(444);   //inserting 444 at the 0th index in arr array
console.log(arr);


/*
checking if a certain element is present in array or not
using includes() function

array_name.includes(element_name)
return type = boolean
*/

console.log(arr.includes(100));  //checking element 100 present in arr array or not


const new_arr = arr.join(); //inserts all elements of arr array to new_arr
                            //also converts elements of new_arr to string
                            
console.log(new_arr);
console.log(typeof(new_arr));

/*
Array slice and splice
Slice operation does not manipulate the array
Splice operation manipulates the array
*/

let arr1 = arr.slice(2,4);
console.log(arr1);
console.log(arr);   //original array unchanged

let arr2 = arr.splice(2,4);
console.log(arr2);
console.log(arr);   //original array changed
                    //elements from index 2 - 4 are cut off from original array
                    // in splice operation