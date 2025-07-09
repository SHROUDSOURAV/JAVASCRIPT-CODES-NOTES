// given array [85,97,44,37,76,60]
// find the average marks of the entire class


let marks = [85, 97, 44, 37, 76, 60];
let avg = 0;

for(let i of marks){
    avg += i;
}

avg = avg/(marks.length);

console.log(`Average Marks = ${avg}`);

