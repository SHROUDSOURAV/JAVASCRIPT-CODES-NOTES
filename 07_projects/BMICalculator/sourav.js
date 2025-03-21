//We are working with submit type event in this Project
//and how to handle such scenarios


const form = document.querySelector("form");

form.addEventListener('submit', function(event){
    event.preventDefault(); //preventing the submitted info to go to server
                            //since we don't want that 
    
    /*
    document.querySelector("#height") => selecting height id
    document.querySelector("#height").value => getting the value but in String format
    so parseInt to convert String to Integer
    */                            
    const height = parseInt(document.querySelector("#height").value)
    
    //same procedure with #weight
    const weight = parseInt(document.querySelector("#weight").value);

    const results = document.querySelector("#results");

    //isNaN(variable_name) ==> returns true if a number/value is not a Number
    //NaN ==> Not a Number
    if(height == '' || height <=0 || isNaN(height)){
        results.innerHTML = "Please give a valid height";
    } 
    if(weight == '' || weight <=0 || isNaN(weight)){
        results.innerHTML = "Please give valid weight";
    }
    else{
        const bmi = weight/((height*height)/10000.0).toFixed(2);      //show max 2 decimal places
        if(bmi < 18.6){
            results.innerHTML = `BMI is ${bmi} (Underweight)`;
        }
        else if(bmi >=18.6 || bmi < 24.9){
            results.innerHTML = `BMI is ${bmi} (Normal)`;
        }
        else if(bmi >= 24.9){
            results.innerHTML = `BMI is ${bmi} (Overweight)`;
        }
    }
});