// learning more about arrays in js
// slice(), splice() functions in array


let arr1 = [10,20,30,40,50,60,70];

console.log(arr1);
//slice() method -> returns a part of the array
//slice(<starting index>,<ending index>)
// starting index -> from where to slice/cut off
// ending index is exclusive so slices till (ending index - 1)

let arr2 = arr1.slice(2,4);
console.log(arr2);


//splice() method -> changes original array
//spice(arg1,arg2,arg3)
// arg1 -> starting index -> from where the deletion will start
// arg2 -> remove   -> mention the number of elements to delete after starting index
// arg3 -> replace -> the elements removed will be replaced by this number (argument not mandatory)

arr1.splice(2,3,111);

console.log(arr1);

