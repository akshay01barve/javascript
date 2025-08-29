// variables ka use ham data ko store krne k liye krte he

// vaiable declare krne k liye 3 keyword he
// 1. var
// 2. let
// 3. const


// achhi programming practice he ki hamesha variable ko use krne se pehle hi declare kr le

/*-------------------------- var -------------------- */
var a; // declaration
a = 10; // initialization
console.log(a); // 10

a = 20; // re-initialization
console.log(a); // 20

var a = 30; // declaration + initialization
console.log(a); // 30

// var can be re-declared and re-initialized

a = "hello"; // re-initialization with different data type
console.log(a); // hello

var a = "world"; // re-declaration with different data type
console.log(a); // world


// what is a function scope and global scope  explanation in hindi


// function scope mtlb function k andar declare kiya hua variable sirf usi function k andar access kr skte he

function varTest() {
  var d = 20; // function scope
  console.log(d); // 20
}
varTest();
// console.log(d); // error: d is not defined


// global scope mtlb variable ko function k bahar declare krne se wo pure code m accessible rhega
var e = 30; // global scope
function varTest2() {
  console.log(e); // 30
}
varTest2();
console.log(e); // 30

// what is a hoisting in javascript  in answer with example explanation in hindi
console.log(f); // undefined    
var f = 40;
console.log(f); // 40   
// hoisting mtlb variable ko declare krne se pehle use kr skte he but value undefined rhegi
// js engine variable declaration ko upar le jata he but initialization waha nhi jata


/*-------------------------- let -------------------- */
// let keyword se declare kiya hua variable block scope m hota he 

let x; // declaration
x = 100; // initialization
console.log(x); // 100

x = 200; // re-initialization
console.log(x); // 200

// let x = 300; // error: Identifier 'x' has already been declared
// let se declare kiya hua variable re-declare nhi kr skte he

/*--------------------------error: Identifier 'x' has already been declared  -------------------- */
// let x = 300; // error: Identifier 'x' has already been declared
// console.log(x); // 300  
// // error: Identifier 'x' has already been declared
// // let se declare kiya hua variable re-declare nhi kr skte he

// but let se declare kiya hua variable re-initialize kr skte he
x = 300; // re-initialization
console.log(x); // 300

// block scope example with let
if (true) {
  let y = 400; // block scope
  console.log(y); // 400
}
// console.log(y); // error: y is not defined
// y is not defined because y is block scope variable
// block scope mtlb variable ko usi block m access kr skte he jaha usse declare kiya gaya he
// block mtlb {} curly braces
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}
// console.log(i); // error: i is not defined
// i is not defined because i is block scope variable
// block scope mtlb variable ko usi block m access kr skte he jaha usse declare kiya gaya he










