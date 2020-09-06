/* Destructuring */

//Array destrut

const names = ["ashish" , "abhishek", "abhinay" , "ujjwal"];



const [first ,second , ...other] = names

console.log(first);
console.log(second)
console.log(other);

const [secondLast , last]  = other;

console.log(last);
console.log(secondLast);

//the ...other is a rest operator which will return an
//array of remaining items




//string desturct

const name = "ashish shakya".split(" ")

let [firstName , lastName] = name;

console.log('firstName' , firstName);
console.log('lastName' , lastName)

//Ignore elements using commas

const fruits = ["banana" , "apple", "mangoo", "plum"];

const [firstFruit , , , lastFruit] = fruits;

//will return banana and plum

console.log(firstFruit);
console.log(lastFruit)

const user= {
  name: "a",
  "Age":20,
  status: "single"
};

//swaping with two vairable or more

let a = 'a';
let b = 'b';

[a , b] = [b , a];

//we can do it with more var

//object destructuring
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

//if the left side name is to complex thwn we
//can sorthand it with : sign

//like this

const {width : w , height : h , title : t} = options

//width -> w

console.log(w) //100

//rest in object
//const {title , ...rest} = option
//now rest has object that contain rest property
//rest.width and rest.height


let nest = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

const { size:  {wh , hh} , items: [cake, conut] , extra } = nest

//destructuring in function parameters

const object = {
   h: 200,
   w: 300,
   name : "Ashihs"
}

function Hello({h , w , name}) {
  console.log(name)
   return (h * w)
}

//find maximum salary with name
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

//use objec.entries

function cal(obj) {
  let max = 0;
  let maxName = null;

  Object.entries(obj).forEach(([key , value]) => {
     if(max < value) {
       max = value;
       maxName = key;
     }
  })

  return maxName
}

console.log(cal(salaries))



console.log(Hello(object))
