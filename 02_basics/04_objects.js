const User1 = {}    //creating object 

//giving properties and values to the object
//values will be stored as key pair : value format as discussed earlier
User1.name = "sourav";
User1.age = 18;
User1.id = "123abc";
User1.isLoggedIn = "false";

//will show data memebers of User1 object
console.log(User1);

/*Let's check out Nester objects
Nested Objects are objects inside an object
*/

const obj1 = {  //object
    fullname : {    //nested object
        userfullname : {    //nested object
            fname : "sourav",
            lname : "bose"
        }
    }
}

/*we can access the properties in nested object 
using dot(.) operator
*/

//accessing fname inside userfullname <- inside fullname <- inside object(obj1)
console.log(obj1.fullname.userfullname.fname);
console.log(obj1.fullname.userfullname.lname);


/*
Adding objects to another objects
Copying the data members/properties 
of objects to another object using

=============================================
Parameters included objects to add 
==============================================
Object.assign(object1, object2,....objectn);

The Object.assign() method copies 
properties from one or more source objects 
to a target object

{} = empty target object for good practice
other objects are being copied from...
*/

const object1 = {1:"a", 2:"b", 3:"c"};
const object2 = {4:"d", 5:"e", 6: "f"};

const object3 = Object.assign({},object1,object2);
console.log(object3);

/*
Another way to copy properties of other objects
is using spread function(...) in Javascript
The below method is much faster and better readable 

...  -> spread symbol

<target_object> = {...object1, ...object2, ...object3, ...objectn};
*/

const object4 = {...object1, ...object2};
console.log(object4);

//Array of Objects
const User2 = [
    //Object1   index = 0
    {
        id: 1,
        dep: "bca1"
    },
    //Object2   index = 1
    {
        id: 2,
        dep: "bca2"
    },
    //Object3   index = 2
    {
        id: 3,
        dep: "bca3"
    }
]
console.log("<=========== Array of Objects ================>");
//Now let's print all the values using loop
for(let i=0; i<3; i++){
    console.log(User2[i].id,User2[i].dep);
}