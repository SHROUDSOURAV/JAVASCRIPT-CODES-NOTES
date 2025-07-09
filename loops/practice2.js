//create a game where you start with random game number. Ask the user to keep guessing the game number untill the user enters the correct number


// Math.random()    => generates a number between 0 - 1
// Math.floor() => removes decimal point and assigns to the nearest(lowest) integer
// to sum up creates a proper whole integer random number


const correctNum = Math.floor(Math.random()*10);   

while(true){
    let input = prompt("Enter the correct Number : ");  // prompt returns string
    input = parseInt(input);    
    if(input === correctNum){   // checks value + datatype is same or not
        console.log(`CORRECT!!! The right number is ${input}`);
        break;
    }
    else{
        console.log(`WRONG!!! ${input} is not the correct number\nTry Again...`);
    }
}

