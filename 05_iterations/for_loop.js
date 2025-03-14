//loops are used to do certain instructions repeatedly for certain iterations
//types of loops
//for-loop
//while loop
//do while loop

//array declaration
const arr = [10,20,30,40,50];

//printing all the elements of array using for loop
//i = 0 => initial value
//i < arr.length => condition
//i++ => post increment operation
for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
}


//NESTED LOOP
//loop having loop inside
//outer loop and inner loop
//nested loop applied to demonstrate pattern printing
for(let i=1; i<=5; i++){    //outer loop
    for(let j=1; j<=i; j++){    //inner loop
        process.stdout.write("*");  //process.stdout.write => prints without newline
    }
    console.log();
}


/*Understanding the break statement in Javascript
break statement is used to come out of a loop 
even if the number of iterations are still left/remaining.

Below is an example demonstrating the break statement
*/
const arr2 = [1,2,3,4,5,6,7,8,9,10];
for(let i=0; i < arr2.length; i++){  
    if(i == 5){
        console.log("index 5 reached, exiting...");
        break;//will exit loop when i hits index 5 of arr2
    }
    console.log(arr2[i]); //else print the array elements
}

/*
continue statement used to ignore a certain case
or skip a step once
continue statement does not exit the loop
*/
for(let i=0; i < arr2.length; i++){  
    if(i == 5){
        console.log("index 5 reached, exiting...");
        continue;
    }
    console.log(arr2[i]); 
}

