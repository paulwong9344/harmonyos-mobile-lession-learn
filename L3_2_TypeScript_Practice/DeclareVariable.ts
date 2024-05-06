// var (variable name): (type) = (variable value)
// This variable stores the value "tony" of type string
var testName1: string = "tom";
console.log(testName1);

// var (variable name): (type);
// It is a string variable. By default, the value is set to undefined
var testName2: string;
// @ts-ignore
console.log(testName2);

// var (variable name) = (variable value)
// The type of the variable is inferred from the data type of the value. Here, the variable is of type string
var testName3 = "mary";
console.log(testName3);

// var (variable name)
// The data type of the variable is "any". By default, its value is set to undefined.
var testName4;
console.log(testName4);

var str = '1';
// str is now of type number
var str2: number = <number> <any> str;
console.log(str2);

// data type is number
var num = 2;
console.log("value of num " + num);
// @ts-ignore
num = "12";
console.log(num)

// Ternary operator
var num = 4;
var result = num > 0 ? "num>0" : "num<0";
console.log(result)

// Concatenation operators 1
let message = "Hi" + "Sam";
console.log(message);

// Concatenation operators 2
let age = 10;
let msg = "I am " + age + " years old.";
console.log(msg);

// Sequential execution, running from top to bottom according to the order of writing
console.log(1);
console.log(2);
console.log(3);

// Conditional statement - if
var num1 = 10;
var num2 = 20;
if(num1 > num2) {
    console.log("The condition is true");
}

// Conditional statement - if-else
var num3 = 1;
if(num3 %2 == 0) {
    console.log("The condition is even");
}else{
    console.log("The condition is odd");
}

// Conditional statement - if-else if-else
var num4 = 5;
var num5;
if (num4 >= 3) {
    num5 = 2 * num4 + 1;
} else if (num4 >= -1 && num4 < 3) {
    num5 = 2 * num4;
} else {
    num5 = 2 * num4 - 1;
}
console.log("Y is:" + num5);

// Interchange of if statement and ternary operator:
var num6 = 10;
var num7 = 20;
var num8;
// If statement
if(num6 > num7){
    num8 = num6;
}else{
    num8 = num7;
}
// The above function can be rewritten as a ternary operator form
num8 = num6 > num7 ? num6:num7;
console.log(num8);

// Basic switch statement
var num9 = 3;
switch (num9){
    case 1:
        console.log("It is 1");
        break;
    case 2:
        console.log("It is 2");
        break;
    case 3:
        console.log("It is 3");
        break;
    default:
        console.log("Show error");
        break;
}

// The penetrability of the case statement
var num10 = 5;
switch (num10){
    case 0:
        console.log("case0 ");
        break;
    case 5:
        console.log("case5 ");
    case 10:
        console.log("case10 ");
    default:
        console.log("default");
}

// While loop
var num11 = 0;
var num12 = 1;
while(num12 <= 100){
    num11 += 1;
}
console.log("Sum from 1 - 100 is:" + num11);

// Do while loop
var num13 = 1;
do{
    console.log("Hello");
    num13 ++;
}while(num13 <= 2);

// For loop
for(var num14 = 0; num14 < 3; num14 ++){
    console.log("Nice");
}

// Break statement
for(var num15 = 1; num15 <= 10; num15 ++){
    if(num15 == 3){
        break;
    }
    console.log("Hello");
}

// Continue statement
for(var num15 = 1; num15 <= 10; num15 ++){
    if(num15 == 3){
        continue;
    }
    console.log("Hello");
}

// Define function:
function test() {
    console.log("Test function");
}
// Call function:
test()

// Function with return type
function testReturn(): string {
    return "Hello World";
}
console.log(testReturn());

// Function with parameters/arguments
function multiply(a: number, b: number) {
    return a * b;
}
console.log("result:" + multiply(2,2));

// Optional parameters
// the `?` operator here marks parameter `c` as optional
function addFunction(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}
console.log("result:" + addFunction(2,2));

// Default parameters
function mulFunction(value: number, exponent: number = 5) {
    return value * exponent;
}
console.log("result:" + mulFunction(2));

// Named parameters (Basic)
function divideTest({ dividend, divisor }: {dividend: number, divisor: number }) {
    return dividend / divisor;
}
console.log("result:" + divideTest({dividend: 10, divisor: 2}));

// Named parameters (Advance - using interface)
interface User {
    firstName?: string,
    age?: number,
    email: string,
}
// Use the interface to define the function argument type
function addUser({firstName, age = 0, email}: User): string {
    return firstName + " " + age + " " + email;
}
console.log("result:" + addUser({firstName: "Tom", email: "aaa@gmail.com"}));

// Rest parameters
function Greet(greeting: string, ...names: string[]) {
    return greeting + " " + names.join(", ") + "!";
}
console.log(Greet("Hello", "Steve", "Bill"));

// Anonymous function
var anon = function() {
    return "Hello world";
}
console.log(anon());

// Anonymous function with parameters
var anon2 = function(num1: number, num2: number) {
    return num1 + num2;
}
console.log(anon2(3,4));

// Recursive function:
function mySum(num:number):number {
    if(num <= 1) {
        return 1;
    }else{
        return (num + mySum(num-1));
    }
}
console.log(mySum(10));
