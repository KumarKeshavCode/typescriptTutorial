/*

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
*/


/*
function BaseEntity(ctr : Function){
    ctr.prototype.id=Math.random();
    ctr.prototype.created = new Date().toString;
}

@BaseEntity
class User{
    [key : string] : any;
    constructor(public name : string){};

}

let user =new User("dany");
console.log(user.id);

*/


function logExecutionTime(target : any ,propertyName: string , descriptor:PropertyDescriptor){
    let originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log('Method :'  +propertyName + "execution started" ,args );
        args[1]=10;
        const result = originalMethod.apply(this, args);
        console.log(`Method ${propertyName} execution ended`);
  return result;
    }
   // return descriptor;
}

class Calculator{
    @logExecutionTime
    add(a:number, b:number):number{
        return a + b;
    }
}

const calculator = new Calculator();
let total = calculator.add(4,3);


console.log(total);
