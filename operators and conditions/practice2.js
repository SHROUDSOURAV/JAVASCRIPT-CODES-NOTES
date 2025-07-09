// prompt to input score and display grade as per the score based on the ranges given in the if-else conditions
let score = prompt("Enter your score : ");
if(score >= 80 && score <= 100){
    console.log("A");
}
else if(score >=70 && score <= 89){
    console.log("B");
}
else if(score >= 60 && score <= 69){
    console.log("C");
}
else if(score >= 50 && score <= 59){
    console.log("D");
}
else if(score >=0 && score <= 49){
    console.log("E");
}
else{
    console.log("invalid score");
}