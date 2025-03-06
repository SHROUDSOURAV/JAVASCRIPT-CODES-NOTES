const num1 = 400;
console.log(num1);
console.log(typeof(num1));  //type of num = number

/*creating object using "new" keyword
Number is the datatype

Creating Number object in num2 constant variable
*/
let num2 = new Number(500);
console.log(num2);
console.log(typeof(num2));  //type of num2 = object

num2 = num2.toString();
console.log(typeof(num2));

let num3 = 1000000;
num3 = num3.toLocaleString('en-IN');    //give commas in numbers(as per Indian System)
console.log(num3);


//***************************** MATHS ******************************//
console.log(Math.abs(-10.23));   //Maths.abs gives absolute value(without negative sign)
console.log(Math.round(10.23)); //Math.round gives round off value(<5 = lower and >5 = upper)
console.log(Math.ceil(10.23));  //Math.ceil gives upper nearest value(any number = upper)
console.log(Math.floor(10.9));  //Math.floor gives lower nearest value(any number = lower)
console.log(Math.sqrt(25));     //Math.sqrt gives square root value
console.log(Math.max(10,20,30,50,40));  //Math.max gives highest value
console.log(Math.min(50,40,20,10,30));  //Math.min gives lowest value
console.log(Math.random()); //will produce random value everytime executed between 0 and 1      