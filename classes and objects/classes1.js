/*
classes are the blueprint of the object
consits of functions and variables
used to create similar type of objects

<============= BASIC SYNTAX ===============>

class <classname>{
    constructor(){....}
    myMethod(){....}
}
*/

class Car{  // class created =>  Car
    start(){    // method of class Car
        console.log('Start');
    }
    stop(){     // method of class Car
        console.log('Stop');    
    }

    model(mName){
        // this keyword is used to reference the data memeber of the class
        // so this.mName is the class variable
        // just mName is the function parameter passed during function calling 
        this.mName = mName;
    }
    display(){
        console.log(this.mName);
    }
}

// creating object of the class
// syntax =======> let/const <object name> = new <class name>
let BMW = new Car();    // BMW = object of class Car
// console.log(BMW);

// accessing methods of class using object
// the below 2 methods return undefined along with the console.log() output
// undefined => printed 2 times because both the 2 methods do not return anything
console.log(BMW.start());   
console.log(BMW.stop());

// passing arguments
BMW.model('BMWNitro');
BMW.display();


