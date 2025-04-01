//Object.getOwnPropertyDescriptor gives description of a property and various values of the property
//Object.getOwnPropertyDescriptor();
//give details like writeable, enumerable info about the selected property

console.log(Math.PI);   //Math.PI is a constant

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");  //Math = module, PI = value

console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
the writable, emumerable and other properties are hardcoded false and hence not customizable
Math.PI value cannot be changed using Object.defineProperty() because it is a non-configurable property
meaning it is not writable or attributes cannot be modified.
*/

const obj1 = {
    name: "sourav",
    class: "bca",
    roll: 123
}

console.log(Object.getOwnPropertyDescriptor(obj1,'name'));   //name = property, obj1 = object where property is present


//Object.defineProperty ===> to edit a single property of an object
Object.defineProperty(obj1,'name',{ //editing property values of "name" property of obj1 object
                                    //single property that is why Object.defineProperty
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(obj1,'name'));