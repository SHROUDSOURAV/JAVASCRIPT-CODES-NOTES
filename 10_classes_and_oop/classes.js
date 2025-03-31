//clasess in javascript
class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    display(){  //class method
        console.log(this.username);
        console.log(this.email);
        console.log(this.password);
    }
}

const user1 = new User("Sourav","abc@google.com",1221); //user1 = object identifier User(args1,args2,arg3) = constructor
console.log(user1.display());   //class method called
console.log(user1); //display class datamembers


//<============ Inheritance ==============>

class abc{  //base class
    constructor(){
        this.username = "hello";
        this.class = "bca";
        this.roll = 123;
    }
    display(){
        console.log(this.username,this.class,this.roll);
    }
}

class dev extends abc{  //dev class inherits properties from abc class(base class)
    constructor(){
        super();    //super class constructor called
        this.username = "devuser";
    }
    show(){
        console.log(this.username);
    }
}

const dev1 = new dev();
console.log(dev1.display());

//super() => references parent class and its data members