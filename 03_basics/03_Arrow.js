//learning about this keyword in Javascript
const user = {  //const user = object
    username: "sourav",
    price: 1000,

    welcome : function(){   //functions are delcared using (:) in objects
        //this keyword references current properties of the object
        console.log(`${this.username}, welcome to website`);
    }
}

//calling function of user object
user.welcome(); //current context of username = "sourav"

//value of username can be changed 
user.username = "soustav";
user.welcome();

// function call(){
//     let username = "abcd";
//     console.log(this.username);
//  output = undefined because "this" keyword only works in objects
// }
// call()

//Arrow function
//add2 = constant variable
//(a,b) formal parameters 
// => arrow operator
const add2 = (a,b) => { //return required in {braces}
    return a+b; //explicit return
}

//calling add2() function
console.log(add2(10,20));


const add2_1 = (a,b) => a+b;    //implicit return

console.log(add2_1(10,20));

//taking objects in arrow 
//to return objects we need to wrap them around () brackets and 
//objects are present within {} brackets
const abc = (a,b) => ({users: "abcdef"})

//will return users property
console.log(abc(10,20));