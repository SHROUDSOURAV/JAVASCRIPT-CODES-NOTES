const marvel = ["spiderman","hulk","daredevil"];
const dc = ["batman","superman","flash"];

/*here all the individual elements of dc array are considered as one single element
and pushed at the last position of marvel array
push function pushes elements on existing array
*/
marvel.push(dc);

//printing both the arrays(marvel,dc)
console.log(marvel);   
console.log(dc);

/*lets try to access a value from the marvel array
for example I want to print the "flash" by
giving the index value
*/

//index1 = 3 consisting [batman, superman, flash]
//index2 = 2 consisting the inner position of "flash" in structure
console.log(marvel[3][2]);

/*Concat function in array
pushes elements and forms a new array
*/
const arr = marvel.concat(dc);
console.log(arr);

const new_arr = [...marvel, ...dc];
console.log(new_arr);


const array1 = [1,2,3,[4,5,6],[7,8,[9,10]]];
/*lets break array1 sub elements into a single array 
using flat function

we also need to mention the depth
we can specify Infinity to break all sub array elements
*/
console.log(array1);
const array2 = array1.flat(Infinity);
console.log(array2);


/*returning array from a set of elements 
using of function
Array.of(val1,val2,val3,....valn) ==============> SYNTAX
*/
console.log(Array.of(100,200,300));