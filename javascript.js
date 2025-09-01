//synchronous and asynchronous kya he javascript me
//synchronous me code line by line execute hota he
console.log("synchronous start");   
console.log("synchronous middle");
console.log("synchronous end");


//asynchronous me code line by line execute nhi hota he
console.log("asynchronous start");  
setTimeout(() => {
    console.log("asynchronous middle");
}, 2000); // 2 second ke bad ye function execute hoga
console.log("asynchronous end"); // ye line turant execute ho jayegi    
// 2 second ke bad asynchronous middle print hoga
//asynchronous me hum kisi bhi function ko kisi bhi time ke bad execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi event k hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi data k milne par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi condition k true hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi condition k false hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi user action k hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi API k response k milne par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi timer k expire hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi promise k resolve hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi promise k reject hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi event listener k trigger hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi callback function k call hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi interval k complete hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi web worker k message receive hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi service worker k message receive hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi DOM event k trigger hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi XMLHttpRequest k response k milne par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi fetch API k response k milne par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi setImmediate k complete hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi process.nextTick k complete hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi requestAnimationFrame k complete hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi IntersectionObserver k trigger hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi MutationObserver k trigger hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi WebSocket k message receive hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi EventSource k message receive hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi geolocation k position receive hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi media k load hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi audio k load hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi video k load hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi image k load hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi file k read hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi database k response k milne par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi timer k complete hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi interval k complete hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi promise k resolve hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi promise k reject hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi callback function k call hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi event listener k trigger hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi user action k hone par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi API k response k milne par execute kr skte he
//asynchronous me hum kisi bhi function ko kisi bhi condition k true hone par execute kr skte he




//tho javascript konsi language he synchronous ya asynchronous

//javascript dono he synchronous aur asynchronous dono he
//javascript me kuch operations synchronous hote he jaise ki variable declaration, function declaration, loops, conditionals etc.
//javascript me kuch operations asynchronous hote he jaise ki setTimeout, setInterval, Promises, async/await, event listeners etc.
//javascript me asynchronous operations ko handle krne k liye hum callbacks, promises aur async/await ka use krte he
//javascript me asynchronous operations ko handle krne k liye hum event loop ka use krte he
//javascript me asynchronous operations ko handle krne k liye hum web APIs ka use krte he
//javascript me asynchronous operations ko handle krne k liye hum microtasks aur macrotasks ka use krte he
//javascript me asynchronous operations ko handle krne k liye hum task queue aur job queue ka use krte he
//javascript me asynchronous operations ko handle krne k liye hum call stack ka use krte he
//javascript me asynchronous operations ko handle krne k liye hum event loop ka use krte he jo ki call stack aur task queue ko monitor krta he aur jab call stack empty hota he to task queue se ek task ko call stack me push krta he
//is tarah se javascript me synchronous aur asynchronous dono operations hote he aur dono ko handle krne ke liye alag alag techniques ka use kiya jata he


