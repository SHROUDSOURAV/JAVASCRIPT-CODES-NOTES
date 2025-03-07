// singleton = creates a single instance/object of a class

//objects literals = {}

//creating an object using object literals ==> {}

const sym = Symbol("key");

const obj1 = {
    //key : value pairs
    //data members/variables and properties inside the object
    // properties = name, age , location, email, isLoggedIn
    // values = sourav, 21, kolkata, google@gmail.com, false
    "print" : "hello world",
    name : "sourav",

    // to make sym = symbol datatype
    //use [] brackets to use an Symbol
    [sym] : "mysymbol1",
    
    age : 21,
    location : "kolkata",
    email : "google@gmail.com",
    isLoggedIn : "false"
}

//accessing properties and values inside the object
console.table([obj1.name,obj1.age,obj1.location,obj1.email,obj1.isLoggedIn]);

//another way to access properties in object is like arrays
/*
notice that the "print" property in obj1 object
is present in string format and there is NO way 
we can access it using dot(.) operator like previously.
In such a scenario we use [] brackets as shown below
*/

//since "print" in quotations so in [] brackets its in quotations as well
console.log(obj1["print"]);

//printing the symbol property in object1
console.log(obj1[sym]);

//overwriting values in the object
obj1.email = "google2_0@gmail.com";
console.log(obj1["email"]);

console.log(obj1);  //printing all the data members/properties/values of the object


/*
Freezing the object
Why do we freeze the object?
Prevents from altering or removing properties in the object,
Does not allow new properties to be added to the object,
*/

//Object.freeze(object_name)
//Object.freeze(obj1);

//testing whether we can alter property after freezing object

obj1["email"] = "whatup@gmail.com";

//email property remains unchanged due to Object.freeze(object_name) function
console.log(obj1["email"]);


//Creating a Method/Function in the Object(obj1)
//function stored in welcome variable in obj1 object
obj1.welcome = function(){
    console.log("welcome Javascript(JS) User");
}

/*let's call the function and print the output
to use a function check the below syntax
*/


//NOTE REMOVE THE Object.freeze(obj1) before executing function
console.log(obj1.welcome());
