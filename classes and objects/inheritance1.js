// inheritance is one of the oops features
// inheritance is basically the child class inheriting properties(data memebers and methods) from the parent class
// we use the keyword extends to implement inheritance in js


// single inheritance in js
class parentClass{
    constructor(){
        this.fname = 'sourav';
        this.lname = 'bose';
    }
    display(){
        console.log(`Full Name => ${this.fname} ${this.lname}`);
    }
}

class childClass extends parentClass{   // single inheritance
    // no child class body yet we can use functions and methods of parent class because of inheritance
}


const childObject = new childClass();   // creating child class object
childObject.display();  // calling parentclass function from childclass object



// super keyword in js 
// super is used to reference the parent class method or variable
// mainly used when we want to reference a parent class entity but the child class also has an entity with the same name
// now if we create a constructor in the child/derived class we need to use super to call the parent class constructor first

class base{
    constructor(){
        this.fname = 'sourav';
        this.lname = 'bose';
    }
    display(){
        console.log(`fname => ${this.fname}\nlname => ${this.lname}`);
    }
}

class dev extends base{
    display(){
        super.display();    // calling parent class function
    }
}


// parent class constructor should be called first 
// when coding constructor for the child/derived class
const object = new dev();
object.display();

class base2{
    display(){
        console.log(`base2 class method`);
    }
}

class dev2 extends base2{
    constructor(){
        super();    // call super constructor(parent class constructor) first 
        console.log(`dev2 class constructor`)
    }
    display(){
        console.log(`dev2 class method`);
    }
}

const object2 = new dev2();
object2.display();