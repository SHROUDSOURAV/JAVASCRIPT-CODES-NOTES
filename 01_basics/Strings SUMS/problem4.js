//Remove a text from the String
const var1 = "souravbose";

//lets try to remove "bose" from the above string
let var2 = var1.replace("bose","");
console.log(var2);

let len2 = 0;
let len = var1.length;
while(len2 != len){
    console.log(var1.charAt(len2));
    len2++;
}