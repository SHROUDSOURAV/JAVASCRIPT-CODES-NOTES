//Creating Date object
let myDate = new Date();

//myDate = object Datatype
console.log(typeof(myDate));

//display current date
console.log(myDate);

//displaying date in a more human readable formats
console.log(myDate.toString());

//DateString is by far the most human readable 
console.log(myDate.toDateString());

// JSON and ISOString have same output for date display
console.log(myDate.toJSON());
console.log(myDate.toISOString());

let mydate2 = new Date(2004,0,03);  //passing date info parameters in constructor
console.log(mydate2.toDateString());    //month starts from 0 



/* Creating Timestamp 
To do that we need 
use Date.now()
*/

let time = Date.now();
console.log(time);  // time shown in miliseconds
console.log(typeof(time));  //datatype number

//using backticks `` to display for better code readability
console.log(`Today's time is ${myDate.toDateString()}`);