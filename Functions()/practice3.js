// we are given an array of marks of students. Filter out the marks of students that scored 90+

let arr = [10,99,101,100,50,90];


let marks90Plus = arr.filter((value) => {
    if(value > 90)
        return value;
});

console.log(`Marks of Students above 90 -> ${marks90Plus}`);