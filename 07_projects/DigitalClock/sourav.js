//selecting clock id element 
const clock = document.querySelector("#clock");

setInterval(function(){
    let date = new Date();  //creating date object
    clock.innerHTML = date.toLocaleTimeString();
    //will continuously update the clock timing
},1000)    //1 second = 1000 milliseconds
