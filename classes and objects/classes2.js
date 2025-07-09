// learning about constructors in js
// constructors are special methods which are invoked when an object is created
// constructor in js are written with the keyword => constructor


// non parameterized constructor example
class classA{
    constructor(){
        console.log('classA constructor');
        this.variable1 = 10;
        this.variable2 = 'sourav';
    }
    display(){
        console.log(`variable1 => ${this.variable1} and variable2 => ${this.variable2}`);
    }
}

const obj1 = new classA();  // creating object of the class
                            // invokes the constructor automatically


obj1.display(); //calling display function


// parameterized constructor example
class classB{
    constructor(fname,lname,roll,dep){
        this.fname = fname;
        this.lname = lname;
        this.roll = roll;
        this.dep = dep;
        console.log(`Variables Initialized....`);
    }
    display(){
        console.log(`<---- Displaying ${this.fname} ${this.lname} Information ---->\nFirst Name => ${this.fname}\nLast Name => ${this.lname}\nRoll => ${this.roll}\nDepartment => ${this.dep}`);
    }
}

const object = new classB('sourav','bose','ABC123','BCA');  //creating object of class
object.display();   //calling of display function


