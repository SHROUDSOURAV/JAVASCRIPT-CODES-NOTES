//while loop is another kind of loop like for-loop
//while loop is entry controlled loop like for-loop
//while loop will keep executing as long as condition is true
/*
<======while loop syntax=======>
    while(condition){
        statement;
    }
*/

let i=1;
while(i<=10){   //print i as loop as i<=10
    process.stdout.write(i+" ");
    i++;
}
console.log();

//printing array using while loop
const arr = [10,20,30,40,50];
i = 0;
while(i<arr.length){
    process.stdout.write(arr[i]+" ");
    i++;
}
console.log();

/*
<==========do-while loop syntax============>
    do{
        statement;
    }while(condition);

do-while loop is exit control loop
do-while will execute atleast one statement
even if the condition is false at the start
*/

do{
    console.log("print 1");
}while(1 > 2);  //condition is wrong
                //yet "print 1" will be executed
                //since do-while is exit controlled loop