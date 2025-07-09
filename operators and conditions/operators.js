let a = "10";   // number value
let b = 10; // string value

// == is for double equality
// "10"(string) converted to 10(integer)
// then the value a and b is equal so prints true
if(a == b){ 
    console.log("true");
}
else{
    console.log("false");
}

// === is for triple equality
// value is checked 
// datatype is checked
// if value and datatype same then returns true
if(a === b){
    console.log("true");
}
else{
    console.log("false");
}

//ternary operators 
let age = 18;
age >=18? console.log("eligible"):console.log("not eligible");