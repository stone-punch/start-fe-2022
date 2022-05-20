import avg from "./avg.js";
import random from "./random.js";



console.log('avg(1,2,3,4); => ' + avg(1,2,3,4));
console.log('avg(1,2); = > ' + avg(1,2));
console.log('avg(1,2,3,4,5,6); = > ' + avg(1,2,3,4,5,6));
console.log(`avg(1,'a',2); => ` + avg(1,'a',2));
console.log('avg([1,2,3]) => ' + avg([1,2,3]));

console.log('random(0, 100); => ' + random(0, 100));
console.log('random(3) => ' + random(3));
console.log(`random(0, 'a'); => ` + random(0, 'a'));
