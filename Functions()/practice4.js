// take n as input from user
// create an array of size n
// calculate sum of array elements using reduce
// calculate product of array elements using reduce

let n = prompt("Enter the number of elements in the array : ");
let arr = [];
let j = 1;

for(let i=0; i<n; i++){
    arr[i] = j;
    j++;
}

console.log(`Array => ${arr}`);

const sum = arr.reduce((prev,current) => {
    return prev + current;
})

console.log(`Array sum of all elements => ${sum}`);

const product = arr.reduce((prev, current) => {
    return prev * current;
})

console.log(`Array product of all elements => ${product}`);

    