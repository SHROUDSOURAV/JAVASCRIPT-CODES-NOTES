class User{
    constructor(fullName, email){
        this.fullName = fullName;
        this.email = email;
    }
    viewData(){
        console.log(`<-- View Data -->\nName => ${this.fullName}\nEmail => ${this.email}`);
    }
}

class Admin extends User{
    constructor(fullName, email){
        super(fullName, email);  // calling parent class constructor
    }
    editData(newName, newMail){
        // initializing new data (edited)
        this.newName = newName;
        this.newMail = newMail;
        console.log(`<-- New Data -->\nName => ${this.newName}\nEmail => ${this.newMail}`);
    }
}

const sourav = new Admin('sourav','bose@gmail.com');
sourav.viewData();
sourav.editData('admin123','admin@gmail.com');



// now check error handling in js
// we use try catch block to code the part where we suspect error can come
// error handling such scenarios prevents the code to shutdown when it encounters such errors

try{
    console.log(`a+b => ${a+b}`);   // the code part where error might arise
}
catch(err){ // err is the err object
    console.log(err);   // just printing the error object
}

// this line to check whether error handling works or not
// if it didn't interpreter wouldn't reach this line ... would stop at the error encountered part
console.log('hello world!!!');
