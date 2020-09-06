/* convert object into array */
const user = {
  name: "john",
  age:20,
  married: true
}

const objToArr = Object.entries(user) //return an array of key
//value pair buttype will remian object

//[[name , john], [age , 20] , [married , true]]

const values = []
objToArr.forEach((key) => {
   values.push(key[1])
})

//now values will become [john , 20 , true]

values.map(item => {
  console.log('item' , item)
})

/* Convert Array back to object */

const arrToObject = Object.fromEntries(objToArr);

for(let i of Object.values(arrToObject)) {
   console.log(i)
}


//playground
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

//get the sum of salaries
const salary = Object.values(salaries);

let sum = 0;
salary.forEach(sal => {
  sum += sal;
})

console.log(sum)