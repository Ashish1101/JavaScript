/* Set */

//set is like an array but it keeps only unique keys

const set = new Set();

set.add(1);
set.add(1);

set.add(1);

set.add(1);

set.add(1);

console.log('size' , set.size) //showing only 1

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
  //  const set = new Set()
  //  for(let i = 0; i < arr.length; i++) {
  //      set.add(arr[i]);
  //  }
  //  return set
  return Array.from(new Set(arr));
}
console.log(unique(values))