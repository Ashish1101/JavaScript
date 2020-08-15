/* Object Methods and 'this'  keyword*/
//method is just a function inside Object

//we can assign a method to object in various war

const user = {
  name :"Ashish",
  age:20,
  //method
  sayHi: function () {
    console.log(`Hello ${this.name}`)
  }
}

//or a sorthand
const admin = {
  name :"admin",
  //method
  sayHi() {
console.log(`Hi ${this.name}`)
  }
}

admin.sayHi()
user.sayHi()

//or we can first make a function than assign to 
//object

function Hello () {
console.log(`Hello ${this.name}`)
}

//we can assign HEllo function to any object
user.Hello = Hello;
user.Hello();

/* this keyword */
/* The rule is simple: if obj.f() is called,
 then 'this' is obj during the call of f. So 
it’s either user or admin in the example above. */

//then in hello function if we assign this function to
//user then 'this' keyword is user at that time

//Calling without an object: this == undefined

/* chaining */

const updown = {
  step : 0,

  up () {
   this.step++;
   return this;
  },

  down () {
      this.step--;
      return this;
  },

  show () {
    console.log(this.step)
    return this
  }
}

updown.show().up().show().down().show()

//when we return this from any object method
//then it point out to the object