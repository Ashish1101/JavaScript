/* Array methods */

//splice 
/* The arr.splice(start) method is a swiss army
 knife for arrays. It can do everything: 
insert, remove and replace elements.  */

let arr = ["I", "go", "home"];
delete arr[1]; // remove "go"
console.log( arr[1] ); // undefined

console.log( arr.length ); // 3

//but this is incorrect we deleted one element so
//length shoul also reduced by one

let array = ["I", "study", "JavaScript"];
array.splice(1, 2); // from index 1 remove 1 element
console.log(array)

let arr1 = ["I", "study", "JavaScript", "right", "now"];
// remove 3 first elements and replace them with another
//arr1.splice(0, 3, "Let's", "dance");
console.log(arr1)

//copying array
//we can copy a part of array using slice method
//it return a new array

let Slice = arr1.slice(1 , 3);
console.log('Slice output ' , Slice  );

//copying object in array

let user = {
  firstName: "Ashihs", 
  lastName : "Shakya"
}

console.log(arr1.concat(user));

//but if we use something special in object
//then instead of whole object 
//it will give us value only

const admin = {
   0: true,
   1: "admin",
   [Symbol.isConcatSpreadable]: true,
   length: 2
}

console.log(Slice.concat(admin))

//searching in array
let names = ["ashihs" , "abhishek" , "abhinay" , "ujjwal"]

if(names.indexOf('ujjwal') !== -1) {
  console.log(names)
}

if(names.includes('ujjwal')) {
  console.log(names)
}

let users = [
  {id: 1, name: "Ashish"},
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

//suppose we have array of object then includes method
//will not work we have to use speacial method
//find

let user1 = users.find(user => user.id == 1);
console.log(user1.name)

//find method works on first accurance if
//there are multiple things then it will
//returns all

//filter finds all accurance of condition

const Filter = users.filter(user => user.id !== 1);
console.log(Filter);

const Map = users.map(user => user);
console.log(Map)

const Split = "'ashish'  , 'kumar' , 'shakya'".split(',')
console.log(Split)
//split converts string into a array

const Join = Split.join(',')
console.log(Join)
//join contverts a aray in string