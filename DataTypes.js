//Type of variable
//There are three type of variable
//var, let const

let name = "Ashihs";
console.log(name)
name = "Shivam"
console.log(name)


//let is a block level variable
//now we can not redeclare name to another variable because it
//is already declared

// const num = 15;
// console.log(num)
//we have to initialiize const at the time of declaration

/* Type Conversion */
//There are certain datatype with which we can convert 
//datatype in another data type

let a = "123";
console.log(a)
//here a is string
let b = Number(a)
console.log(b)
//here b is number

let c = a + 123
console.log(c)
//it concatenate the string

let d = b + 123
console.log(d)
//it add the number

//by default only plus operator concatenate the string 
//all other operator works same as the dis on int

let mul = a * 23
console.log(mul);
//a is string but it will multiply becase we are not doing +
//operation on it

/* convert string in a number by + unary operator */
let plusUnaryOperator = +a;
console.log(plusUnaryOperator) 
//it converts the a string in to number

// console.log(3 + 10 * 2);   // logs 23
// console.log(3 + (10 * 2)); // logs 23 because parentheses here are superfluous
// console.log((3 + 10) * 2); // logs 26 because the parentheses change the order 

// const nullVal = null;
// const falseVal = 0
// const emptyVal = " "
// const Undefined = 'undefined';


// console.log(nullVal ?? "Answer")
// console.log(falseVal ?? "Ashish")
// console.log(emptyVal ?? "Name")

function sayHi() {
  return 'Hello'
}

let funcSayHi = sayHi;
console.log(funcSayHi())
//call function 
// sayHi()


//it is called function expression
const Hi = function () {
   return "hi"
}

let func = Hi;
console.log(func())
