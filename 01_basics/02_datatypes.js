"use strict"    //treat all javascript codes as per newer version

/*
open developer tools and open the console tab
type the below code and check the output
javascript is stored in document and javascript engine is stored in browser
But since we are using nodejs not browser "alert" syntax will be different and
the below code will only work in browser so ---> alert(4+4); will give error
alert(4+4);
*/

let var1 = "sourav";    //string datatype
let var2 = 18;          //number datatype   bigint => used to store more numbers(used for big numbers)
let var3 = false;       //boolean datatype  (true/false) => output

// null datatype => standalone value which basically means Empty
// undefined => datatype is not declared(variable declared)
// object datatype
//symbol datatype => unique

// printing the variables in table structure
console.table([var1,var2,var3]);

//printing the types of the above variables
// to check the type of datatype use typeof() function in javascript
console.log(typeof(var1));
console.log(typeof(var2));
console.log(typeof(var3));
console.log(typeof(null));  //null is considered Object datatype
console.log(typeof(undefined)); //undefined datatype output