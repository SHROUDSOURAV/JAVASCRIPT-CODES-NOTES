//<============= OBJECT LITERAL ================>
//user = object literal
//username, loginCount, signedIn are the properties of the object(user)
const user = {
    username: "sourav",
    loginCount: 8,
    signedIn: true,
    display: function(){
        console.log(this.signedIn);  //we need to use this. operator to reference data member of object in function
                                    //this. references the data members of the class in the current context
    }
}

console.log(user)   //printing user object
console.log(user.username);     //accessing object properties using (.)dot operator
console.log(user.display());

//<============= this operator ===============>

function User(username, roll, id){
    this.username = username;
    this.roll = roll;
    this.id = id;
    return this;    //this retuns various properties along with the function local variables
}
const UserOne = User("Sourav",111,12345);
console.log(UserOne);   //this overrides the current context values of data members 
                        //that is why we create new object with constructor (new instance everytime)


//<============ CONSTRUCTOR ===============>

const date = new Date()         //here Date() is the constructor
                                //new keyword for creating new instance
                                //const = constant
                                //date = constant variable

                    