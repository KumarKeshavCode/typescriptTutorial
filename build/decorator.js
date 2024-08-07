"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function logExecutionTime(target, propertyName, descriptor) {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log('Method :' + propertyName + "execution started", args);
        args[1] = 10;
        const result = originalMethod.apply(this, args);
        console.log(`Method ${propertyName} execution ended`);
        return result;
    };
    // return descriptor;
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    logExecutionTime
], Calculator.prototype, "add", null);
const calculator = new Calculator();
let total = calculator.add(2, 3);
console.log(total);
