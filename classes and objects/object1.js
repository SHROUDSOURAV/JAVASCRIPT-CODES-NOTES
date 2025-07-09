const student = {
    fullName:'sourav bose',
    marks:90,
    printMarks: function(){
        // this keyword used to reference the marks data member of the object
        // without using this keyword we will not be able to reference the marks data member of the current class scope
        // without using this keyword tells js to look for 'marks' variable inside the printMarks() function scope
        console.log(`Marks = ${this.marks}`);
    }
};

// calling the function of 'student' onbject
student.printMarks();

// ways to define function in js
/*
object = {
    function1(){....body....}
    function2: function(){....body....}
}
*/
const object = {
    displayName(){
        console.log(`Sourav Bose`);
    }
}

object.displayName();


// let's talk about prototype in objects
// prototype provides various properties to the object
// prototype is itself a reference to an object
// for example => object.toString() even though not declared ... can be used because its part of prototype
// array.push => array treated as an object in js and push function is part of the prototype
// protoype is an inbuilt object and when we create a custom object all the properties of the prototype are inherited by our custom object


const employee = {
    variable:10,
    calcTax(){
        console.log('Tax rate is 10%');
    }
};

const worker = {
    salary:5000
};

// setting up a prototype in classes and objects in js
// object1.__proto__ = object2
// we can use this if we want to use function of employee through worker
// setting up the prototype lets worker object to access properties of employee object
worker.__proto__ = employee

worker.calcTax();   // accessing calcTax() function from worker object

console.log(worker['salary']);  // accessing salary key from worker object

console.log(worker);   


const object1 = {
    display(){
        console.log('object1 function');
    }
}

const object2 = {
    display(){
        console.log('object2 function');
    }
}

// setting proto in object2
object2.__proto__ = object1;

// now object2 is set to proto
// so already has object1 function(display)
// but there is another display function in object2
// so in this case when display() function is called object2's display() function will be called NOT object1's 
object2.display();