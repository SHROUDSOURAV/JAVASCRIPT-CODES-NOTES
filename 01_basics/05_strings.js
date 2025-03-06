const fname = "sourav";
const lname = "bose";

console.log(fname + " "+ lname);
console.log(fname+50);

/*
printing the above output using
String Interpolation
Backticks ``
Mention Variable name within ${}

//console.log(`${variable_name}`)   ==========> SYNTAX

*/
console.log(`${fname} ${lname}`);   
console.log(`${fname}50`);

let var1 = new String("sourav");    //Creating object of String 
console.log(typeof(var1));          //type will be object
console.log(var1);                  //printing var1 variable

//var1 is stored as per key value pairs
console.log(var1[0]);

//finding length of the String
console.log(var1.length);   //variable_name.length =====> SYNTAX

//display string in UpperCase
console.log(var1.toUpperCase());

//display string in LowerCase
console.log(var1.toLowerCase());

/*
get a char0acter in a particular index
eg: string = "sourav" , get letter "r" from the string 
always mention the index position
*/
console.log(var1.charAt(3));

/*
get an index value of a particular character
using indexOf function
eg: string = "sourav"
    get index value of "r"
*/
console.log(var1.indexOf("r"));

/*
String Slicing
Using substring function 

variabel_name.substring(start_position,end_positon) =========> SYNTAX
ending position is excluded
*/

const var2 = "hello world";
const slice1 = var2.substring(0,5); //get "hello" part of var2 variable
                                    //[0:5] => 0 because starting index and 5 because 5 is excluded(till 4)
                        
console.log(slice1);                                

const slice2 = var2.substring(5);   //if ending position not mentioned 
                                    //will take the rest of the remaining characters 
                                    //in string variable
console.log(slice2);
console.log(var2.slice(-11));   //negative index working in slice function strings

let var3 = "    abcd     ";
console.log(var3);
console.log(var3.trim());   //trim function used to remove starting and ending spaces
                            // variable_name.trim() ====> SYNTAX


/*
Replacing a certain character 
of a string with another character
using replace function (FIRST OCCURENCE!!!)

variable_name.replace("replacing_character","replaced_with_character") ====> SYNTAX
*/

let test = "souravbose";
console.log(test.replace("s","z"));     //replacing "s" with "z" in string "souravbose"
                                        //CHANGES ONLY IN FIRST OCCURENCE!!!

console.log(test.replaceAll("s","z"));  //CHANGES IN ALL OCCURENCES!!!   

console.log(test.split("v"));   //spliting the string from the mentioned character(separator)
// can be extensively used in arrays spliting