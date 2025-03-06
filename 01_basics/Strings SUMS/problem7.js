//String Contains Only Alphabetic Characters or Not
let var1 = "souravbose";
let count = 0;

for(let i=0; i < var1.length; i++){
    let character = var1.charCodeAt(i); //charCodeAt method to get ASCII of the character
    if(!(character >=65 && character <=90) && !(character >=97 && character <=122)){
        count++;
        break;
    }
}
if(count == 0)
    console.log("True");
else
    console.log("False");