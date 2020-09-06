/* Arrays */
//declaration 
//1 ->
let arr =  new Array();
arr.push("hello")
arr.push("Banana")
console.log(arr)

//or

let array = [];
array.push("hello")
array.push("apple")
console.log(array)

//methods
//deleting from end using pop
arr.pop();
console.log(arr);

//deleting from front using shift
array.shift();
console.log(array)

//adding in front using unsifht

arr.unshift("bat");
console.log(arr)

//adding in end using push
arr.push("ball");
console.log(arr)

//NOTE push and unsift can add multiple things at once

arr.push("news", "paper")
console.log(arr)

//loops

//for..of
for (let key of arr) {
  console.log(key)
}

//array are objects so we can use for..in loop also

for (let key in arr) {
   console.log(arr[key])
}

//we sould avoid for..in loop 

//generic for loop

for (let i = 0; i < arr.length; i++ ) {
  console.log(i , arr[i]);
}

//clear a array
//make length property of aray 0

array.length = 0;
console.log(array)

//to string method
console.log(arr.toString())
//return all array elements with , values

let Join = arr.join(" ")

// arr.push(function() {
//   alert( this );
// })

// console.log(arr[5]())


