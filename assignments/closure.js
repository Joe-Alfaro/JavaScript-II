// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function county(){
  let rule = "No Skipping";
  function city(){
    console.log(rule);
  }
  city();
}
county();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return () => ++counter;
};
// Example usage: 
// const newCounter = counter();
// console.log(newCounter()); // 1
// console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0; 
  return (direction) => direction === 'increment' ? ++counter : direction ==='decrement' ? --counter : console.log('None') ;
    // if (direction === 'increment') {
    //   return ++counter;
    // }
    // if (direction ==='decrement'){
    //   return --counter;
    // }
};

//Example usage: 
// const newCounter = counterFactory();

// console.log(newCounter('increment'));
// console.log(newCounter('increment'));
// console.log(newCounter('increment'));
// console.log(newCounter('decrement'));
// console.log(newCounter('decrement'));
// console.log(newCounter('decrement'));