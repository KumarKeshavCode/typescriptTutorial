function Logger(constructor :Function){// Fu ction declare as a class  and f for object
    console.log(`Logginging constructor`)
    console.log(constructor);
    constructor.prototype.created_date=new Date().toString();

}
@Logger
class Person{
    [key : string]: any;
    public name : string;
    constructor(public nameval: string){
        this.name = nameval;
        console.log("PErson name " + this.name);
    }
}

const person = new Person('Kumar KEshav');

console.log(person.created_date);

@Logger
class car {
    public name : string;
    constructor(public nameval: string){
        this.name = nameval;
        console.log("Car name " + this.name);
    }
}

const car1 = new car('BMW');