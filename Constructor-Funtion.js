function User (name,  age) {
   this.name = name;
   this.age = age;
   this.address = {
       home: "308",
       stree: 5,
       sayHi () {
           console.log('hi')
       },
       array: [1,2,3,4,5,6,7]
   }
}

let user = new User("ashish",20);
let Ashish = new User("ashish",20);

console.log(user)
console.log(Ashish)

/* if there are no parameter than we can omit paranthesis */

/* Constructor functions should only be 
called using new. Such a call implies a
 creation of empty this at the start and 
returning the populated one at the end. */



/* Return from constructor */


//convention is that constructor function should
//always astart with capital letter


//if we return from constructor function that it overrides the
//property
