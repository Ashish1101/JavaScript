/* Optional chaining  '?.' */
//in optional chaining we first check that object has 
//the property or not


//the below example will throw a error

// let user = {}
// console.log(user.address.street)

//but if we use ?. operator than it will show undefined
//instead of error

let admin = {}
console.log(admin?.address?.street)

//here we are checking that if admin exsits than
//check weather adress exists or not
//if than show address

// '?.' checking admin second address

//The variable before ?. must be declared
//If there’s no variable user at all, then user?.anything triggers an error:

//function checking

// let user1 = {
//   admin() {
//     alert("I am admin");
//   }
// }

// let user2 = {};

// user1.admin?.(); // I am admin
// user2.admin?.();

//brackets

// let user1 = {
//   firstName: "John"
// };

// let user2 = null; // Imagine, we couldn't authorize the user

// let key = "firstName";

// alert( user1?.[key] ); // John
// alert( user2?.[key] ); // undefined

// alert( user1?.[key]?.something?.not?.existing); // undefined


//delete

// delete user?.name; // delete user.name if user exists

//We can use ?. for safe reading and deleting, but not writing

// the idea of the code below is to write user.name, if user exists

// user?.name = "John"; // Error, doesn't work
// // because it evaluates to undefined = "John"


/* 


    obj?.prop – returns obj.prop if obj exists, otherwise undefined.
    obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
    obj?.method() – calls obj.method() if obj exists, otherwise returns undefined.


*/
