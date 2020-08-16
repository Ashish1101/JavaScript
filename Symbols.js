/* Symbols  */

//symbols are used to assign hidden proprty

//create
const id1 = Symbol()

//we can also give symbol a label

// let  id = Symbol("id");
// console.log(id)

//a symbol is a unique property not two value
// can have same name but can have som label

//Symbols don’t auto-convert to a string

//to convert use id.toString()


//hidden property

/*
Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.

For instance, if we’re working with user objects, that belong to a third-party code. We’d like to add identifiers to them.

Let’s use a symbol key for it:
 */

// let user = { // belongs to another code
//   name: "John"
// };

// let id = Symbol("id");

// user[id] = 1;

// alert( user[id] );


// Symbols in an object literal

let id = Symbol("id");
let user = {
  name: "John",
  [id]: 123 // not "id": 123
};

//copying symbool

//symbol property not coyied in for...in loop

//Object.keys(user)

//object.assign() copied the whole object with symbol

/* Global symbol */
//we can read symbol globally if we are using it anywhere in 
//the project then we can read it

//In order to read (create if absent) a symbol
// from the registry, use Symbol.for(key).

console.log(Symbol.for()) //return the value

console.log(Symbol.keyFor(id)) //return the name

//global symbol
let globalSymbol = Symbol.for("name");

//local
let localSymbol = Symbol("name");
