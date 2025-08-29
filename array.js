// array kya he javascript me
// array ek special type ka object he jisme hum multiple values ko store kr skte he
// array ko declare krne k liye 2 tarike he
// 1. array literal
// 2. array constructor

// array literal
let arr1 = [];
console.log(arr1); // []

arr1 = [10, 20, 30, 40, 50];
console.log(arr1); // [10, 20, 30, 40, 50]

// array constructor
let arr2 = new Array();
console.log(arr2); // []

arr2 = new Array(5); // array of length 5
console.log(arr2); // [ <5 empty items> ]

arr2 = new Array(10, 20, 30);
console.log(arr2); // [10, 20, 30]

// array me different data types ko store kr skte he
let arr3 = [10, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
console.log(arr3); // [10, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]]
// array me duplicate values ko store kr skte he
let arr4 = [10, 20, 10, 30, 20];
console.log(arr4); // [10, 20, 10, 30, 20]
// array me values ko index k through access kr skte he
console.log(arr1[0]); // 10
console.log(arr1[2]); // 30
console.log(arr1[4]);   // 50
// array me values ko update kr skte he
arr1[0] = 100;
console.log(arr1); // [100, 20, 30, 40, 50]
// array me values ko add kr skte he
arr1[5] = 60;
console.log(arr1); // [100, 20, 30, 40, 50, 60]
// array me values ko remove kr skte he
arr1[2] = undefined;
console.log(arr1); // [100, 20, undefined, 40, 50, 60]
// array ki length ko access kr skte he
console.log(arr1.length); // 6
// array ki last value ko access krne k liye length-1 krte he
console.log(arr1[arr1.length - 1]); // 60


//javascript me array ke kitne methods he jisse ham array par operations kr skte he pahle mujhe sab ka naam batao phir uske example bhi do
// array methods
// 1. push() - array ke end me value add krta he
arr1.push(70);  
console.log(arr1); // [100, 20, undefined, 40, 50, 60, 70]
// 2. pop() - array ke end se value remove krta he
arr1.pop();
console.log(arr1); // [100, 20, undefined, 40, 50, 60]
// 3. unshift() - array ke start me value add krta he
arr1.unshift(0);
console.log(arr1); // [0, 100, 20, undefined, 40, 50, 60]
// 4. shift() - array ke start se value remove krta he
arr1.shift();
console.log(arr1); // [100, 20, undefined, 40, 50, 60]
// 5. indexOf() - value ka index return krta he agar value nhi mile to -1 return krta he
console.log(arr1.indexOf(20)); // 1
console.log(arr1.indexOf(70)); // -1
// 6. includes() - value exist krti he to true return krta he nhi to false
console.log(arr1.includes(40)); // true
console.log(arr1.includes(70)); // false
// 7. slice() - array ka ek part nikalta he aur naya array return krta he
let arr5 = arr1.slice(1, 4); // index 1 se 4 tak (4th index include nhi hoga)
console.log(arr5); // [20, undefined, 40]
// 8. splice() - array me se values ko remove ya replace krta he
arr1.splice(2, 1); // index 2 se 1 value remove krdo
console.log(arr1); // [100, 20, 40, 50, 60]
arr1.splice(1, 2, 25, 35); // index 1 se 2 value remove krdo aur 25, 35 add krdo
console.log(arr1); // [100, 25, 35, 50, 60]
// 9. join() - array ki values ko string me convert krta he
let str = arr1.join(", "); // values ko comma se separate krke string me convert krdo
console.log(str); // "100, 25, 35, 50, 60"
// 10. concat() - do ya do se zyada arrays ko jodta he
let arr6 = arr1.concat(arr2);   
console.log(arr6); // [100, 25, 35, 50, 60, 10, 20, 30]
// 11. forEach() - array ki har value par ek function ko call krta he
arr1.forEach(function(value, index) {
    console.log("Index: " + index + ", Value: " + value);
});
// 12. map() - array ki har value par ek function ko call krta he aur naya array return krta he
let arr7 = arr1.map(function(value) {
    return value * 2;
});
console.log(arr7); // [200, 50, 70, 100, 120]
// 13. filter() - array ki har value par ek function ko call krta he aur jaha function true return krta he un values ka naya array return krta he
let arr8 = arr1.filter(function(value) {
    return value > 30;
});
console.log(arr8); // [100, 50, 60]
// 14. reduce() - array ki har value par ek function ko call krta he aur ek single value return krta he
let sum = arr1.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // 0 initial value he
console.log(sum); // 270
// 15. sort() - array ki values ko sort krta he
arr1.sort(function(a, b) {
    return a - b; // ascending order
});
console.log(arr1); // [25, 35, 50, 60, 100]
arr1.sort(function(a, b) {
    return b - a; // descending order
});
console.log(arr1); // [100, 60, 50, 35, 25]
// 16. reverse() - array ki values ko reverse krta he
arr1.reverse();
console.log(arr1); // [25, 35, 50, 60, 100]
// 17. find() - array ki har value par ek function ko call krta he aur jaha function true return krta he pehli value return krta he
let found = arr1.find(function(value) {
    return value > 50;
});
console.log(found); // 60
// 18. findIndex() - array ki har value par ek function ko call krta he aur jaha function true return krta he pehli value ka index return krta he
let foundIndex = arr1.findIndex(function(value) {
    return value > 50;
});
console.log(foundIndex); // 3
// 19. some() - array ki har value par ek function ko call krta he aur agar function kisi bhi value par true return krta he to true return krta he, nhi to false
let hasLargeNumber = arr1.some(function(value) {
    return value > 100;
});
console.log(hasLargeNumber); // false
// 20. every() - array ki har value par ek function ko call krta he aur agar function sabhi values par true return krta he to true return krta he, nhi to false
let allPositive = arr1.every(function(value) {
    return value > 0;
});
console.log(allPositive); // true
// 21. flat() - nested array ko single array me convert krta he
let nestedArr = [1, 2, [3, 4], [5, 6]];
let flatArr = nestedArr.flat();
console.log(flatArr); // [1, 2, 3, 4, 5, 6]
// 22. fill() - array ki sabhi values ko ek specific value se replace krta he
arr1.fill(0);
console.log(arr1); // [0, 0, 0, 0, 0]
// 23. Array.isArray() - check krta he ki given value array he ya nhi
console.log(Array.isArray(arr1)); // true
console.log(Array.isArray(100)); // false
// 24. length - array ki length ko return krta he
console.log(arr1.length); // 5
// ye kuch common array methods he jisse hum array par operations kr skte he

// ab mujhe isme se map  method ke baare me details me  samjhao uska kaam kya or wo ham kaha use kar sakte he  usme kon  kon se aarugement  hote he also syntax
// map() method
// map() method ek array method he jo ki array ki har value par ek provided function ko call krta he aur us function ke return value se ek naya array banata he
// is method ka use tab krte he jab hume kisi array ki har value ko kisi specific operation se transform krna ho aur uske result ko ek naya array me store krna ho
// syntax
// array.map(function(currentValue, index, array) {
//     // return element for new array
// }, thisArg);
// parameters
// 1. currentValue - ye parameter array ki current value ko represent krta he jisse function call ho raha he
// 2. index (optional) - ye parameter current value ka index represent krta he
// 3. array (optional) - ye parameter original array ko represent krta he jisse map method call ho raha he
// 4. thisArg (optional) - ye parameter function ke andar this keyword ko refer krne k liye use hota he
// example
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(value) {
    return value * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]
// arrow function ke sath example
let squared = numbers.map(value => value * value);
console.log(squared); // [1, 4, 9, 16, 25]
// hum map method ka use kisi bhi array par kr skte he jisme numbers, strings, objects ya kisi bhi data type ki values ho
// ye method original array ko modify nhi krta he balki ek naya array return krta he jisme transformed values hoti he


// reduce method ke baare me bhi details me samjhao uska kaam kya he or wo ham kaha use kar sakte he  usme kon  kon se aarugement  hote he also syntax
// reduce() method
// reduce() method ek array method he jo ki array ki har value par ek provided function ko call krta he aur ek single output value return krta he
// is method ka use tab krte he jab hume kisi array ki values ko ek single value me aggregate krna ho, jaise ki sum, product, maximum, minimum, etc.
// syntax
// array.reduce(function(accumulator, currentValue, index, array) {
//     // return updated accumulator
// }, initialValue);
// parameters
// 1. accumulator - ye parameter ek accumulator value ko represent krta he jo ki function ke har call ke baad update hoti he
// 2. currentValue - ye parameter array ki current value ko represent krta he jisse function call ho raha he
// 3. index (optional) - ye parameter current value ka index represent krta he
// 4. array (optional) - ye parameter original array ko represent krta he jisse reduce method call ho raha he
// 5. initialValue (optional) - ye parameter accumulator ki initial value ko set krta he agar ye provide nhi kiya gaya to array ki first value accumulator ban jayegi aur iteration second value se start hogi
// example  
let sumOfNumbers = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0); // 0 initial value he
console.log(sumOfNumbers); // 15
// arrow function ke sath example
let productOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1); // 1 initial value he
console.log(productOfNumbers); // 120
// hum reduce method ka use kisi bhi array par kr skte he jisme numbers, strings, objects ya kisi bhi data type ki values ho
// ye method original array ko modify nhi krta he balki ek single output value return krta he jo ki accumulator ki final value hoti he  
