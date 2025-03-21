const buttons = document.querySelectorAll('.button');   //storing buttons as nodelist for using loop for styling 

const body = document.querySelector("body");

buttons.forEach( (button) => {
    console.log(button);
    //event listener deals with how the website will handle response of the event occured
    //event listener for clicking the color button
    button.addEventListener('click',function(event){    //event = event object variable name
        console.log(event); //printing the event object
        console.log(event.target);  //printing the place where the event occured

        //changing body background color as per color b utton box clicked
        if(event.target.id == 'grey'){
            body.style.backgroundColor="grey";
        }
        else if(event.target.id == 'white'){
            body.style.backgroundColor="white";
        }
        else if(event.target.id == 'blue'){
            body.style.backgroundColor="blue";
        }
        else if(event.target.id == 'yellow'){
            body.style.backgroundColor="yellow";
        }
        else if(event.target.id == 'purple'){
            body.style.backgroundColor="purple";
        }
    })
})