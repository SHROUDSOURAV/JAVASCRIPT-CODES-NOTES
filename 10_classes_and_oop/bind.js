//With the bind() method, an object can borrow a method from another object.

const obj1 = {
    username: "sourav",
    class: "bca",
    newUser: function(){
        return this.username +" "+this.class;
    }
}

const obj2 = {
    username: "soustav",
    class: "bca2",
}

//let's bind 
//binding obj1 data members to obj2 data members
//so upon binding the return values from newUser() function changes to values of obj2 data members
const newUser1 = obj1.newUser.bind(obj2);

console.log(newUser1());