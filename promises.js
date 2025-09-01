// JavaScript Promises kya  hai
// Promise ek object hota hai jo asynchronous operation ke complete hone ya fail hone ka indication deta hai
// Promise ke 3 state hoti hai: pending, fulfilled, rejected
// Pending state me promise abhi complete nahi hua hota
// Fulfilled state me promise successfully complete ho jata hai
// Rejected state me promise fail ho jata hai
// Promise ke sath hum .then() aur .catch() methods ka use karte hai
// .then() method tab call hota hai jab promise fulfilled hota hai
// .catch() method tab call hota hai jab promise rejected hota hai
// Promise ke sath hum async/await ka bhi use kar sakte hai
// Async function hamesha ek promise return karta hai
// Await keyword ka use karke hum promise ke complete hone ka wait kar sakte hai
// Promise chaining ke through hum multiple asynchronous operations ko sequence me execute kar sakte hai
// Promise.all() method ka use karke hum multiple promises ko parallel me execute kar sakte hai
// Promise example with syntax:

let myPromise = new Promise(function(resolve, reject) {
    // asynchronous operation
    let success = true; // change this to false to see the reject case
    if(success) {
        resolve("Promise fulfilled successfully!");
    } else {
        reject("Promise rejected!");
    }
});

myPromise.then(function(value) {
    console.log(value); // Promise fulfilled successfully!
}).catch(function(error) {
    console.log(error); // Promise rejected!
});


// explian the above code in hindi line by line
// upar wale code me ek promise create kiya gaya he jiska naam myPromise he
// new Promise ke andar ek function pass kiya gaya he jo do parameters leta he resolve aur reject
// is function ke andar ek asynchronous operation simulate kiya gaya he jisme success variable true ya false ho sakta he
// agar success true hota he to resolve function call hota he jisme "Promise fulfilled successfully!" message pass kiya jata he
// agar success false hota he to reject function call hota he jisme "Promise rejected!" message pass kiya jata he
// uske baad myPromise ke sath .then() method use kiya gaya he jo tab call hota he jab promise fulfilled hota he
// .then() method ke andar ek function pass kiya gaya he jo value parameter leta he aur console.log ke through us value ko print karta he
// agar promise rejected hota he to .catch() method call hota he
// .catch() method ke andar ek function pass kiya gaya he jo error parameter leta he aur console.log ke through us error ko print karta he
// is tarah se promise ka use karke hum asynchronous operations ko handle kar sakte hai javascript me
// promises ke sath hum async/await ka bhi use kar sakte hai

// example of async/await with promise
async function asyncFunction() {
    try {
        let result = await myPromise;
        console.log(result); // Promise fulfilled successfully!
    } catch(error) {
        console.log(error); // Promise rejected!
    }
}

asyncFunction();
// explian the above code in hindi line by line
// upar wale code me ek async function define kiya gaya he jiska naam asyncFunction he
// async function ke andar try-catch block use kiya gaya he error handling ke liye
// try block ke andar await keyword ka use karke myPromise ke complete hone ka wait kiya jata he
// jab myPromise fulfilled hota he to uska result result variable me store hota he
// phir console.log ke through us result ko print kiya jata he
// agar myPromise rejected hota he to catch block execute hota he
// catch block ke andar error parameter ko console.log ke through print kiya jata he
// finally asyncFunction ko call kiya jata he
// is tarah se async/await ka use karke hum promises ko aur bhi asani se handle kar sakte hai javascript me
// promises ke sath hum promise chaining aur Promise.all() ka bhi use kar sakte hai


