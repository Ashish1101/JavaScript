/*  Maps  */

//Methods
/*
1. set(key , value);  set value
2. has(key); check value return boolean
3. get(key); get value
4. delete(key); delete value
5. clear()  clear map
*/

//create Map

const newMap = new Map();
newMap.set('java' , 1)
newMap.set('c++' , 2);

//check if it has key
console.log(newMap.has('java'))  //returns true

//Map can use Object as a key
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log( visitsCountMap.get(john) ); // 123

//maps provide chaining map.set(key1, value).set(key2 , value)


//iteration over map
//for..of loop
//forEach loop

newMap.forEach((key , value , newMap) =>{
  console.log(`Hello ${key} your value is ${value}`)
})


//convert object into map
const admin1 = {
  name: 'ashish',
  age:20
}

//Object.entries return an array of arrays



const admin = new Map(Object.entries(admin1))
console.log(admin.size)

//object.entrie map objec {} into [[key , value] , [key2, value2] , []]


//convert map into plain object
const mapToObject = Object.fromEntries(admin.entries());
console.log(mapToObject)
