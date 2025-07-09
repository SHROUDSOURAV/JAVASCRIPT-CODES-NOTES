class User{
    constructor(fullName, email){
        this.fullName = fullName;
        this.email = email;
    }
    viewData(){
        console.log(`<-- View Data -->\nName => ${this.fullName}\nEmail => ${this.email}`);
    }
}

const sourav = new User('sourav bose', 'helloworld@gmail.com');
sourav.viewData();