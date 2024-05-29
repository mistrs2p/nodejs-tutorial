// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems)

// console.log("HArahaasd")


console.log("First task")
console.time('MyTimer')
for (let i= 0; i<100000000; i++) {
  const h3 = document.querySelector('h3');
  h3.textContent = 'Hey everyone is waiting on me!';
}
console.timeEnd('MyTimer')
console.log('Next task')