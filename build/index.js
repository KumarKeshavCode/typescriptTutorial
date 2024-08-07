"use strict";
// export function hello(name: string) :string {
Object.defineProperty(exports, "__esModule", { value: true });
//     return 'hello' + name;
// }
// let lastName :string ="Kumar";
// lastName = 2;
// class person{
//     public name :string;
//     constructor(name: string){
//         this.name = name;
//     }
//     public greet(){
//         console.log(`Hello ${this.name}`);
//     }
// }
// const person1 =new person('Alice');
// console.log(person1.name);
// person1.greet();
/*
class person{
   protected name :string;
    constructor(name: string){
        this.name = name;
    }

    public greet(){
        console.log(`Hello ${this.name}`);
    }
}

class Employee extends person{
    private position: string;

    constructor(name :string ,position :string){
        super(name);
        this.position = position;

    }

    public introduce(){
        this.greet();
        console.log(`I am an employee and my position is ${this.position}`);
    }

}
const employee1 = new Employee('bob','Manager');

let message =employee1.introduce();

*/
// const person1 =new person('Alice');
// console.log(person1.name);
// person1.greet();
// person1.name ;
//8******************************** INTERFACE 
/*
interface Animal{
    name : string;
    age: number
    
    ;
    makesound() : void;
}

class Dog implements Animal{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    makesound(): void {
        console.log("all Good");
    }
}

let mydog = new Dog("test",3);
*/
/*
interface User{
    id: number;
    name: string;
    email: string;
    age: number;

}

let user : User={
    id :1,
    name : "John Doe",
    email : "johndoe@example.com",
    age : 30
}

*/
/*
class  User{
    id: number;
    name: string;
    email: string;
    age: number;

    constructor(id: number, name: string, email: string ,age: number){
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }

}

let user : User={
    id :1,
    name : "John Doe",
    email : "johndoe@example.com",
    age : 30
}

*/
//************************************** */
/*
abstract class shape{
    abstract calculateArea(): number;

    //partial abstraction above use abstract methods below
    getColor(): string {
        return 'unknow';
    }
}

class Circle extends shape{
    constructor(private radius:number){
        super();
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

const mycircle = new Circle(5);
console.log(`Area of the circle : ${mycircle.calculateArea}`);
console.log(`color of circle: ${mycircle.getColor()}`);

*/
/******
class MathUtil{
    static pi : number =3.14;
    static calculateArea(radius: number): number {
        return Math.PI * radius ** 2;
    }
}

console.log(MathUtil);
console.log(`Area of circle with radius 5 : ${MathUtil.calculateArea(5)}`);

*/ ///
/////////// Exceptuonal 
/*
function divide(a: number, b: number): number {
    if(b === 0){
        throw new Error("Division by zero is not allowed");
    }
    return a/b;
}

try{
    let value = divide(5,0);
    console.log(value);
}
catch(error :any){
console.log(error.message)
}
finally{
    console.log("This code will always execute");
}

*/
// own exception handling
/*
class ValidateError extends Error{
    constructor(message: string){
        super(message);
        this.name = "ValidateError";
    }
}


function validateInput(input :string)
{
    if(input==""){
        throw new ValidateError("Input is emplty");
    }
}

try{
    validateInput("");
}
catch(error :any){
    if(error instanceof ValidateError){
        console.log(error.message);
    }
}


*/
///
const logger_1 = require("./Logger/logger");
logger_1.logger.info("Thos is info msg");
logger_1.logger.error("Thos is error msg");
