// objects in js
// stores elements in key : value pairing
// objects are declared using parenthesis {}
// {} = an emppty object
// objects are basically {anything(left side) :(colon) anything(right side)}  inside parenthesis({})
// objects cannot be declared as standalone they need to be assigned to a variable

//          {
//              name:'sourav',
//              age:21,
//              kuchbhi_left:'kuchbhi_right'
//              key (left side) : value (right side)
//              // object
//           }

// creating a object
// and accessing the values inside the object using the object's keys
let object1 = {
    name:'sourav',
    age:21
}

// one way to access
console.log(object1.name);  // dot operator
// another way to access
console.log(object1['age']);    // array index way

// changing values of the object 
// modifying the values of the object
object1.name = 'sourav bose';
object1['age'] = 19;

console.log('Values after Changing\n',object1);


// if we do not want to make changes to the object
// we can use freeze() function to prevent making any changes to the object
Object.freeze(object1); // freeze function maintains the current key : value (pairing) state

// since object is freezed these do not change their values
object1.name = 'hello bose';
object1.age = 22;

console.log(object1);