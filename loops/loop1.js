// learning about for, while, do while loops
//for loop
// i = 1 => initialization
// i<=5 => condition
// i++ increment each iteration
console.log("xxxxxxxxxxxxx for loop xxxxxxxxxxxxx");
for(let i=1; i<=5; i++){
    console.log(i); // printing i in each iteration
}

console.log("xxxxxxxxx while loop xxxxxxxxxx");

//while loop
let i=1;    // initialization of i variable
while(i<=5){    // i<=5 => condition for termination of loop when satisfied
    console.log(i); // print i value in each iteration
    i++;    //increment i in each iteration
}

console.log("xxxxxxxxx do loop xxxxxxxxxx");
// do while loop
// checks condition after executing or iterating once
// so output is atleast one
i=6;    //initialization
do{
    console.log(i); //print i
    i++;    // increment i
}while(i<=5);   // condition