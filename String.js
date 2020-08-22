/* Strings */

//Methods on String
let str = "ashish";

//charAt and sqaure bracket for getting a character out
console.log('[]' , str[0]);
console.log('charAt', str.charAt(0))

//difference between [] and charAt if char not found then
// [] gives 'undefined' and charAt gives empty sring ('')

/* Iteration in string */
//for iteration we used for..of loop

let loopStr = "Hello world from JavaScript";
for (let index of loopStr) {
console.log('i' , index);
}

//Strings are inmmutable we can not change then 
str[0] = "H"
console.log(str)

//how to find substring in str
//1 method is indexOf

let testIndexOf = "It is a cold day";
// if(testIndexOf.indexOf('It')) {
//    alert('Proccess further')
// }

//the above code will not work because it 
//found the string at begining of the string 
//that return pos 0

if(testIndexOf.indexOf('It') !== -1) {
 //alert('we found')
}

//Include , startsWith , endsWith

//include return only true or false not the position

if(testIndexOf.includes('a')) {
 console.log('we found')
}

//starts with and endwith do the samething in opposite mannwer

console.log(testIndexOf.startsWith('It'));
console.log(testIndexOf.endsWith('friend'));

console.log('slice method -> ' , testIndexOf.slice(0 , 5));
console.log('subString method -> ', testIndexOf.substring(0 , 5));
console.log('subString method -> ', testIndexOf.substr(0 , 5));