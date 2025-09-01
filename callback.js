// callbacks kya he javascript me
// callback ek function he jo dusre function ko argument k roop me pass kiya jata he
// callback function ko dusre function ke andar call kiya jata he
// callback function ko asynchronous operations me use kiya jata he
// callback function ko event listeners me use kiya jata he
// callback function ko promises me use kiya jata he
// callback function ko array methods me use kiya jata he
// callback function ko setTimeout aur setInterval me use kiya jata he
// callback function ko higher order functions me use kiya jata he
// callback function ko functional programming me use kiya jata he
// callback function ko hum kisi bhi function ke andar define kar skte he
// callback function ko hum kisi bhi function ke andar pass kar skte he
// callback function ko hum kisi bhi function ke andar return kar skte he
// callback function ko hum kisi bhi function ke andar call kar skte he
// callback function ko hum kisi bhi function ke andar store kar skte he
// callback function ko hum kisi bhi function ke andar manipulate kar skte he
// callback function ko hum kisi bhi function ke andar execute kar skte he
// callback function ko hum kisi bhi function ke andar use kar skte he
// callback function ko hum kisi bhi function ke andar pass kar skte he aur us function ke andar call kar skte he



// example of callback function
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function callMe() {
    console.log("I am callback function");
}
greet("John", callMe); // Hello John \n I am callback function

//explian the above code in hindi line by line  
// upar wale code me ek function greet define kiya gaya he jo do parameters leta he name aur callback
// greet function ke andar pehli line me console.log ke through "Hello " + name print kiya jata he
// dusri line me callback function ko call kiya jata he
// dusra function callMe define kiya gaya he jo console.log ke through "I am callback function" print karta he
// finally greet function ko "John" aur callMe function ke sath call kiya jata he
// jab greet function call hota he to pehli line me "Hello John" print hota he aur dusri line me callMe function call hota he jo "I am callback function" print karta he
// is tarah se callback function ka use kiya jata he javascript me