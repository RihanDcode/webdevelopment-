// //async await with functoin Eg:-
// async function Activedata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
// async function NowActive() {
//     console.log("Something is better is than Nothing");

//     console.log("Something is better is than Nothing");

//     console.log("Something is better is than Nothing");
//     let newvar = await Activedata()
//     console.log(newvar)
//     console.log("Something else");

//     console.log("Something else");

// } NowActive()


// // SetTimeout Eg:-
// console.log("Rihan");
// setTimeout(function () {
//     console.log("i am inside this")
// }, 2000);
// console.log("The End");


// // CallBack function with using normal function Eg:-
// function callbackone(arg) {
//     console.log(arg)
// }
// function newScriptone(src, callback) {
//     let sc = document.createElement("script");
//     sc.scr = src;
//     setTimeout(function () {
//         sc.onload = callbackone("Danish");
//     }, 3000);
//     document.head.append(sc)
// }
// newScriptone("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callbackone)



// //CallBack function with using Arrow => function Eg:-
// const callback = (arg) => {
//     console.log(arg)
// }
// const newScript = (src, callback) => {
//     let sc = document.createElement("script");
//     sc.scr = src;
//     setTimeout(function () {
//         sc.onload = callback("Pathan");
//     }, 3000);
//     document.head.append(sc)
// }
// newScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

// console.log('danish');
// console.log('pathan');


// let prom1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("yes i am done")
//         resolve("Wasim")
//     },5000);
// })

// prom1.then((a)=>{
//     console.log(a)
// })





// setTimeout(function main(){
// let a = prompt("Enter the number 1")
// let b = prompt("Enter the number 2")
// let sum = parseInt(a) + parseInt(b)
//     if(isNaN(a) || isNaN(b)){
//         throw SyntaxError("bhai galta data store kr raha hai sahi se kr")
//     }
//     let x  = 2
//     try {
//             console.log(`This is your sum ${sum * x}`)

//     } catch (error) {
//         console.log("Error aa gaya bhai sahi data store kr ",error)
//     }
//     finally{
//         console.log("finally use kr na hai okiii")
// }},2000);main()



// console.log("Hiii...");
// console.log("Initializing Hacking...");
// console.log("Reading Your Files...");
// console.log("Password Files Detected...");
// console.log("Sending All Password And Personal File To Server...");
// console.log("Cleaning Up...");


/*setTimeout(function(){
    let a = "Hiii...";
    console.log(a)
    // for(let i = 0; i<a.length; i++){
    //     console.log(a[i])
    // }
},2000)*/


//IIFE
// async function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45);
//         }, 2000);
//     });
// }
//     (async function main() {
//         let a = await sleep()
//         console.log(a)
//         let b = await sleep()
//         console.log(b)
//     })()


//IIFE
/* (function (name) {
     console.log("Hellow " + name);
 })("Danish");


 (function(){
     console.log("heloo well done ")
 })();*/

// (function (name) {
//     console.log("Hello " + name);
// })("Danish");


/*function lyrics(){
let [arr, ...arr2] = [
    "\nKe ab kuch hosh nahi hai\n",

"Tu mujhko pila degi kya\n",

"Mein pi kar jo bhi kahunga\n",

"Tu subha bhula degi kya\n",

"Tu bahon mein rakhle do pal\n",

"Phir chahe dur hata de\n",

"Mein godh mein rakh lun agar sar\n",

"Tu mujhko sula degi kya\n",

"Jaati nahi teri yaadein kasam se\n",

"Ke dil ka bharam hai tu\n",

"Baaki nahi ab koi sharam jana\n",

"Ek dharam hai tu\n",

"Jo kehti thi mat piyo na\n",

"Meri jaan zeher hai yeh\n",

"Usey dekhta hoon koi gair chhuye\n",

"Ab aur zeher kya piyu\n"
    ]
}
    
   for (let i = 0; i < arr.length; i++) {
       setTimeout(() => {
           console.log(arr[i,1])
       }, 1000);
       setTimeout(() => {
           console.log(...arr2[i,2])
       }, 2000);
       
} lyrics()*/


/*
//const { createServer } = require('node:http');
import { createServer } from 'node:http';

const hostname = '127.0.0.6';
const port = 3000;

const server = createServer((reject, data) => {
    data.statusCode = 200;
    data.setHeader('Content-Type', 'text/html');
    data.end('<h1> hellow wolrd is not work sorry helloww world is working now nodemon kaam nhi kr raha hai !</h1>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/

/*
// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14159;
export default function square(x) { return x * x; }
*/




/*
//const { createServer } = require('node:http');

import {createServer} from 'node:http';

const hostname = '127.0.0.1';
const port = 5000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World! is working now nodemon kaam kr raha hai ');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:$  {port}/`);
});*/


/*const express = require('express');
const apps = express();
const ports = 5000;
apps.get('/blog', (req, res) => {
    res.send(`work is done`)
});
apps.get('/blog/:slug/:bhaicharaontop', (req, res) => {
    console.log(req.params);
    res.send(`Danish ${req.params.slug} is a web developer and software engineer from India ${req.params.bhaicharaontop}`);
});
// apps.get('/intro-Python', (req, res) => {
//     res.send('Python is a high-level, interpreted, and general-purpose programming')
// });
// apps.get('/js', (req, res) => {
//     res.send('JavaScript, often abbreviated as JS,.')
// });
apps.listen(ports, () => {
    console.log(`code is working condition ${ports}`)
})
console.log("this is a netflix js file ");


/*const {createServer} = require('node:http');
const { isModuleNamespaceObject } = require('node:util/types');
const localhost = '127.0.0.1';
const port = 5000;
const server = createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('contane-type','text/plain');
    res.end('Enjoy mini fun and well is done');
});

server.listen(port,localhost ,()=>{
    console.log(`http://${localhost}:${port}`)
})*/








/*import {createServer} from "node:http";
const hostname = '127.0.0.1';
const port = 5000;

const server = createServer((req , res)=>{
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html')
    res.end('kaam kr ra hai nodemon alomost done')
})

server.listen(port,hostname,()=>{
    console.log(`http://${hostname}:${port}`)
})

console.log("this is a netflix js file");*/




/*
// node code:-
const {createServer} = require('node:http');
/*import {createServer} from 'node:http'
const hostname = '127.0.0.1';
const ports = 3000;

const server = createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader ('Content-type','text/html');
    res.end('hii i am html tags nodemon worki mode on fine ');
})
server.listen(ports,hostname, ()=>{
    console.log(`server is runnig http://${hostname}:${ports}`)
})


// express code :-
const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'));

app.get('/app',(req,res)=>{
    res.send('hii i am a first server from localhosat');
})
app.get('/app/:slug',(req,res)=>{
    res.send(`hii i am a first server from localhosat not okey ${req.params.slug}`);
})
app.listen(port,()=>{
    console.log(`this is your first server${port}`)
})





// this is code from 2 arr value different 
/*const arr1 = [100, 200, 300, 400];
const arr2 = [100, 200, 300, 400];

// Step 1: length check
if (arr1.length !== arr2.length) {
    console.log("Arrays not same");
} else {
    // Step 2: har element compare using every()
    const isSame = arr1.every((value, index) => value === arr2[index]);

    if (isSame) {
        console.log("Arrays are same");
    } else {
        console.log("Arrays are different");
    }
}*/



/*
// Node.js HTTP server code :-
const { createServer } = require('node:http');
//import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    res.end("hello world is working fine nodemon kaam kr raha hai i ok ");
})

server.listen(port,hostname, () => {
    console.log(`Server runnig at http://${hostname}:${port}`)
});*/


// // Express js code :-
// const express = require('express');
// //import express from 'express';
// const app = express();
// const ports = 3000;

// app.get('/',(req, res)=>{
//     // res.send('hello world// this is a first express js app');
//     res.sendFile('public/practice.html',{root : __dirname});
// }).post('/items',(req,res)=>{
// console.log('Thia is a post request');
// // res.send('This is a post request response');
// res.sendFile('spotify/spotity.html',{root : __dirname});
//    // res.json({Username : 'thedaniskhan ',Password: ' @12345 ',Email : 'dk5427454@gmail.com',Phone : ' +91 7017070170 '});
//  }).listen(ports,()=>{
//     console.log(`this is a port no ${ports}`)
// })



/*// fs module code :-
const fs = require('fs');
fs.writeFile('Danish.txt', 'This is fs module file a create new file', (err) => {
    fs.appendFile('Danish.txt','\n i am a web developer ', (err) => {
        if (err) throw err;
        console.log('Data appended successfully');
    });
});*/





/*
//harry bhai ka code :-

const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World21!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
    */

/*
const express = require('express')
const app = express()
const port = 3000;

const myloging = function (req, res, next) {
    console.log('this is a loging page')
    res.send('bhaiya badiya')
    next()
}
const aboutme = function (req, res, next) {
    console.log('This is aboout me')
    next()
}
const somethingnew = function (req, res, next) {
    console.log('idk something new')
    next()
}

app.use(myloging)
app.use(aboutme)
app.use(somethingnew)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000,()=>{
    console.log(`This is a port no ${port}`)
})
*/

/*
const fs = require('fs');
const path = require('path');
const securefile = './spotify';
const file = fs.readdirSync(securefile);

file.forEach((file)=>{
    const ext = path.extname(file).slice(1);

    const extfolder = path.join(securefile,ext);

    if(!fs.existsSync(extfolder)){
        fs.mkdirSync(extfolder);
    }

    const oldpath = path.join(securefile,file);
    const newpath = path.join(extfolder,file);

    fs.renameSync(oldpath, newpath);
});

console.log("file sorted successfully by extension")
*/


/*

let arr = [
    function(a,b){
        return a + b;
    },
    function(a,b){
        return a - b;
    },
    function(a,b){
        return a * b;
    },
    function(a,b){
        return a / b;
    },

];
console.log(arr[0](10,5));
*//*

let obj = {
    name:"Danish khan",
    age:17,
    greet : function(){
        console.log("Hellow my name is ");
    }
};
console.log(obj);
obj.greet();




let get = function(number){
    return function(number){
        return number*number;
    }
}
let result = get();
console.log(result(5));

let get1 = function(number){
    return function(number){
        return number*number;
    }
}

let result1 = get1();
console.log(result1(5));



{
    let one  = "This is var variable";
    console.log(one);
}



function demo(){
    let two = "This is let variable number two";
    console.log(two); 
}
demo();


var three = "This is var variable number three";
console.log(three);



let four = [
    [
        1,2,3
    ],
    [
        4,5,6   
    ]
]
console.log(four[1][2]);
*/


// class human{
//     age=17;
//     name="Danish khan";

//     greet(){
//         console.log(" hellow bhai sab balle balle hai ");
//     }

//     greet2(){
//         console.log("bhai sab balle balle hai");
//     }


// }

// let obja = new human();
// console.log(obja.greet());
// console.log(obja.greet2());
// console.log(obja.name);
// console.log(obja.age);

/*
class student {
    name = "Danish khan";
    class = 13;
    #age = 17;

    constructor(newname, newclass, newage) {
        this.name = newname;
        this.class = newclass;
        this.#age = newage;
    }

    get age(){
        return this.#age;
    }
    set age(newage){
        this.#age = newage;
    }
}
let ujma = new student("Rihan khan", "12th", 16);
console.log(ujma.name);
console.log(ujma.class);
console.log(ujma.age); 




class amma{
    name = "Sabiha khan";
    age = 40;

    greet(Nname = "(\"Danish\")" , Lname = "(\"khan\")"){
        return `Hellow my name is ${Nname} ${Lname}`;
    }
}
let objammi = new amma();
console.log(objammi.name);
console.log(objammi.age);
console.log(objammi.greet("Rihan","khan"));
console.log(objammi.greet());*/
/*

function main(newname = "(\"Enter Your Name\")", newage = "(\"Enter Your Age\")") {
    console.log(`hellow my name is ${newname} and age is ${newage}`);
}
main("Danish khan",17);


class Animal{
    name ;
    age ;
    #HumanName ;
    constructor(Nname, Nage, Hname){
        this.name = Nname;
        this.age = Nage;
    }
   get humanname(){
    return this.#HumanName;
   }
    set humanname(newhumanname){   
        this.#HumanName = newhumanname;
    }
}
let objanimal = new Animal("Dog",5);
console.log(objanimal.name);
console.log(objanimal.age);
objanimal.humanname = "Danish khan";
console.log(objanimal.humanname);




function main() {
    console.log(20);
}

function maan(value = "(\"Enter Your Name\")" , age = main()) {
    console.log(`Hellow my name is ${value} my age is ${age}`);
}
maan();
*/

/*

console.log(Math.pow(3,3));

let num = 3;
let num1 = "sorry please sorry maaf kar du 😭🙏";
if(num == num1){
    console.log(num**num1);
}
else if(num > num1){
    console.log(num ** num1);
}
else if(num < num1){
    console.log(num ** num1);
}else{
    console.log("Invalid number");
}
console.log(num1);


let curr = new Date();
let time = curr.getHours() + ":" + curr.getMinutes() + ":" + curr.getSeconds();
console.log(time);
// console.log(curr)



let Danish = new Date("Agust 2008 07:30:00");
console.log(Danish);


let a = new Date(2008, 7, 15, 7, 30, 0);
console.log(a);

let noe = {
    name : "Danish khan",
    age : 17,
    hobby : "coding",
}


let jsondata = {...noe};
noe.age = 18;
console.log("this ia a oringenal obj",noe);
console.log("this is a copy obj",jsondata);

let newSamey = new Date();
console.log(newSamey);

for(let key in noe){
    console.log(noe[key])
}


let newneo = [
    17 , "Aknish"
]
for(let value of newneo){
    console.log(newneo[value])
}



let specificDate = new Date("August 8, 2008 07:30:00");
console.log(specificDate);

let now = new Date();
console.log(now.getDate()); // Day of the month
console.log(now.getMonth() + 1); // Month (add 1 because it's 0-indexed)
console.log(now.getFullYear()); // Year
console.log(now.getHours(), now.getMinutes(), now.getSeconds()); // Time


let obj = { name: "Danish" }; // Memory allocated for obj
console.log(obj.name); // Output: Danish

obj = null; // Now the object is unreachable
// Garbage Collector will free the memory for the object
*/


// let arr = [1,2,3,4,5];
// for(let i of arr){
//     console.log(i)
// }

// let obj = {
//     Name: "Danish",
//     Class: 12,
//     City: "Delhi",
//     "Phone No": 8510867240
// };
// obj.Post = "Programmer";
// for(let key in obj){
//     console.log(key)
// }
// console.log(obj)





// try{
//     console.log(x)
// }catch(Error){
//     console.log(`bhai value toh de de ${Erorr}`)
// }finally{
// console.log("mera kuch bhi kaam nhi hai bas hui de diye gyaa hu")
// }

// let sum = 10;
// let y = 30;

// if(isNaN(sum) || isNaN(y)){
//     throw SyntaxError("Sorry this not allowed in Hindi Bhean chod number de")
// }


/*

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed"); // Custom error
    }
    return a / b;
}
try {
    console.log(divide(10, 2)); // 5
    console.log(divide(10, 0)); // This will throw an error
} catch (error) {
    console.log("Caught an error:", error.message);
} finally {
    console.log("Division operation complete");
}

*/

// const t1 = performance.now();
// for(let i = 1; i <= 100; i++){
//     let para = document.createElement('p').textContent = " I am para";
//     document.body.appendChild(para);
// }
// console.log("no." + i)






// let Name1 = "Sync Code 1";
// let Name2 = "Sync Code 2";
// setTimeout(async function Time() {
//     let inFunc = await "Async Code 1";
//     console.log('hiiii byeee');
//     console.log(inFunc)
// }, 5000)
// console.log(Name1)
// console.log(Name2)

//     let promise = new Promise((resolve,reject)=>{
//     let sach = true;
//     if(sach === true){
//         resolve("pass")
//     }else{
//         reject("fail")
//     }
// })

// class number{
//     name = "Danish";
//     age = 16;
//     city = "Delhi";

//     greet(){
//         console.log("first function");
//     }
//     dreet(){
//         console.log("end function");
//     }
// }

// let obj = new number();
// console.log(obj.age)

// async function call() {
//     let a = await "Danish";
//     console.log(a)
//     let b = await "Rihan";
//     console.log(b)
//     let d = await "Khan";
//     console.log(d)
//     setTimeout(async function time() {
//     }, 3000);
//     let c = "Pathan";
//     console.log(c)
// }
// call();






// this is 1 register button code
// document.getElementById("register-button").addEventListener("click", function () {
//     let seconddiv = document.createElement("Div");
//     seconddiv.style.width = "100%";
//     seconddiv.style.height = "100vh";
//     seconddiv.style.position = "fixed";
//     seconddiv.style.top = "0";
//     seconddiv.style.left = "0";
//     seconddiv.style.display = "flex";
//     seconddiv.style.backdropFilter = "blur(5px)";
//     seconddiv.style.justifyContent = "center";
//     seconddiv.style.alignItems = "center";
//     seconddiv.innerHTML = `<div id="modal-container">

//                             <h4 style="font-weight: bold; color: green;">Let's start</h4>

//                             <h2>Welcome to Smart ExpenseTracker?</h2>
//                             <br>

//                             <p>Sign up and start taking notes.</p>
//                             <br>
//                             <input type="email" id="email-input" placeholder="Enter your email">
//                             <br>
//                             <button id="continue-button">Continue</button>

//                             <button id="continue-button2">Continue with Google</button>

//                             <button id="continue-button3">Continue with Facebook</button>

//                             <button id="close-button2">X</button>
//                             <br>
//                           </div>`;
//     document.body.appendChild(seconddiv);
//     document.getElementById("close-button2").addEventListener("click", function () {
//         document.body.removeChild(seconddiv);
//     });
// });






// this is 2 register button code
// document.getElementById("register-button2").addEventListener("click", function () {
//     let seconddiv = document.createElement("Div");
//     seconddiv.style.width = "100%";
//     seconddiv.style.height = "100vh";
//     seconddiv.style.position = "fixed";
//     seconddiv.style.top = "0";
//     seconddiv.style.left = "0";
//     seconddiv.style.display = "flex";
//     seconddiv.style.backdropFilter = "blur(5px)";
//     seconddiv.style.justifyContent = "center";
//     seconddiv.style.alignItems = "center";
//     seconddiv.innerHTML = `<div id="modal-container">

//                             <h4 style="font-weight: bold; color: green;">Let's start</h4>

//                             <h2>Welcome to Smart ExpenseTracker?</h2>
//                             <br>

//                             <p>Sign up and start taking notes.</p>
//                             <br>
//                             <input type="email" id="email-input" placeholder="Enter your email">
//                             <br>
//                             <button id="continue-button">Continue</button>

//                             <button id="continue-button2">Continue with Google</button>

//                             <button id="continue-button3">Continue with Facebook</button>

//                             <button id="close-button2">X</button>
//                             <br>
//                           </div>`;
//     document.body.appendChild(seconddiv);
//     document.getElementById("close-button2").addEventListener("click", function () {
//         document.body.removeChild(seconddiv);
//     });
// });







// this is 3 register button code
// document.getElementById("register-button3").addEventListener("click", function () {
//     let seconddiv = document.createElement("Div");
//     seconddiv.style.width = "100%";
//     seconddiv.style.height = "100vh";
//     seconddiv.style.position = "fixed";
//     seconddiv.style.top = "0";
//     seconddiv.style.left = "0";
//     seconddiv.style.display = "flex";
//     seconddiv.style.backdropFilter = "blur(5px)";
//     seconddiv.style.justifyContent = "center";
//     seconddiv.style.alignItems = "center";
//     seconddiv.innerHTML = `<div id="modal-container">

//                             <h4 style="font-weight: bold; color: green;">Let's start</h4>

//                             <h2>Welcome to Smart ExpenseTracker?</h2>
//                             <br>

//                             <p>Sign up and start taking notes.</p>
//                             <br>
//                             <input type="email" id="email-input" placeholder="Enter your email">
//                             <br>
//                             <button id="continue-button">Continue</button>

//                             <button id="continue-button2">Continue with Google</button>

//                             <button id="continue-button3">Continue with Facebook</button>

//                             <button id="close-button2">X</button>
//                             <br>
//                           </div>`;
//     document.body.appendChild(seconddiv);
//     document.getElementById("close-button2").addEventListener("click", function () {
//         document.body.removeChild(seconddiv);
//     });
// });












// this is 4 register button code
// document.getElementById("register-button4").addEventListener("click", function () {
//     let seconddiv = document.createElement("Div");
//     seconddiv.style.width = "100%";
//     seconddiv.style.height = "100vh";
//     seconddiv.style.position = "fixed";
//     seconddiv.style.top = "0";
//     seconddiv.style.left = "0";
//     seconddiv.style.display = "flex";
//     seconddiv.style.backdropFilter = "blur(5px)";
//     seconddiv.style.justifyContent = "center";
//     seconddiv.style.alignItems = "center";
//     seconddiv.innerHTML = `<div id="modal-container">

//                             <h4 style="font-weight: bold; color: green;">Let's start</h4>

//                             <h2>Welcome to Smart ExpenseTracker?</h2>
//                             <br>

//                             <p>Sign up and start taking notes.</p>
//                             <br>
//                             <input type="email" id="email-input" placeholder="Enter your email">
//                             <br>
//                             <button id="continue-button">Continue</button>

//                             <button id="continue-button2">Continue with Google</button>

//                             <button id="continue-button3">Continue with Facebook</button>

//                             <button id="close-button2">X</button>
//                             <br>
//                           </div>`;
//     document.body.appendChild(seconddiv);
//     document.getElementById("close-button2").addEventListener("click", function () {
//         document.body.removeChild(seconddiv);
//     });
// });












// this is 5 register button code

// document.getElementById("register-button5").addEventListener("click", function () {
//     let seconddiv = document.createElement("Div");
//     seconddiv.style.width = "100%";
//     seconddiv.style.height = "100vh";
//     seconddiv.style.position = "fixed";
//     seconddiv.style.top = "0";
//     seconddiv.style.left = "0";
//     seconddiv.style.display = "flex";
//     seconddiv.style.backdropFilter = "blur(5px)";
//     seconddiv.style.justifyContent = "center";
//     seconddiv.style.alignItems = "center";
//     seconddiv.innerHTML = `<div id="modal-container">

//                     <h4 style="font-weight: bold; color: green;">Let's start</h4>

//                     <h2>Welcome to Smart ExpenseTracker?</h2>
//                     <br>

//                     <p>Sign up and start taking notes.</p>
//                     <br>
//                     <input type="email" id="email-input" placeholder="Enter your email">
//                     <br>
//                     <button id="continue-button">Continue</button>

//                     <button id="continue-button2">Continue with Google</button>

//                     <button id="continue-button3">Continue with Facebook</button>

//                     <button id="close-button2">X</button>
//                     <br>
//                   </div>`;
//     document.body.appendChild(seconddiv);
//     document.getElementById("close-button2").addEventListener("click", function () {
//         document.body.removeChild(seconddiv);
//     });
// });































document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully!");

    console.log("Hello, World!");




    // this is both code 
    document.getElementById("get-button").addEventListener("click", function () {
        let mydiv = document.createElement("Div");
        mydiv.style.width = "100%";
        mydiv.style.height = "100vh";
        mydiv.style.position = "fixed";
        mydiv.style.top = "0";
        mydiv.style.left = "0";
        mydiv.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        mydiv.style.display = "flex";
        mydiv.style.justifyContent = "center";
        mydiv.style.alignItems = "center";
        mydiv.innerHTML = `<div style="background-color: white; padding: 20px; border-radius: 10px; text-align: center; height: 40vh; width: 30vw; border:1px solid black; border-radius: 20px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">

                                <h4 style="font-weight: bold; color: green;">Let's start</h4>

                                <h2>How do you plan to use <br> Smart Expense Tracker?</h2>
                                <br>

                                <p>We'll redirect you to the best setup for your needs.</p><br>

                                <button id="productivity-button" class="form-button">For my productivity</button>
                                <br>
                                <button id="work-button" >For my work</button>
                                <button id="close-button">X</button>
                              </div>`;
        document.body.appendChild(mydiv);
        document.getElementById("close-button").addEventListener("click", function () {
            document.body.removeChild(mydiv);
        });






        //     // this is productivity button code
        document.getElementById("productivity-button").addEventListener("click", function () {
            document.body.removeChild(mydiv);
            let seconddiv = document.createElement("Div");
            seconddiv.style.width = "100%";
            seconddiv.style.height = "100vh";
            seconddiv.style.position = "fixed";
            seconddiv.style.top = "0";
            seconddiv.style.left = "0";
            seconddiv.style.display = "flex";
            seconddiv.style.backdropFilter = "blur(5px)";
            seconddiv.style.justifyContent = "center";
            seconddiv.style.alignItems = "center";
            seconddiv.innerHTML = `<div id="modal-container">

                                <h4 style="font-weight: bold; color: green;">Let's start</h4>

                                <h2>Welcome to Smart ExpenseTracker?</h2>
                                <br>

                                <p>Sign up and start taking notes.</p>
                                <br>
                                <input type="email" id="email-input" placeholder="Enter your email">
                                <br>
                                <button id="continue-button">Continue</button>

                                <button id="continue-button2">Continue with Google</button>

                                <button id="continue-button3">Continue with Facebook</button>

                                <button id="close-button2">X</button>
                                <br>
                              </div>`;
            document.body.appendChild(seconddiv);
            document.getElementById("close-button2").addEventListener("click", function () {
                document.body.removeChild(seconddiv);
            });

            function validateUsername(username) {
                if (username.trim() === "") {
                    alert("Email is empty!");
                    return false;
                }
                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!regex.test(username)) {
                    alert("Invalid Email format");
                    return false;
                }
                return true;
            }
            document.getElementById("continue-button").addEventListener("click", function () {
                const username = document.getElementById("email-input").value;
                if (validateUsername(username)) {
                    let newtab = window.open();
                    newtab.location = "haryybhai.html";
                }
            });
        });






            // this is work button code
        document.getElementById("work-button").addEventListener("click", function () {
            document.body.removeChild(mydiv);
            let seconddiv = document.createElement("Div");
            seconddiv.style.width = "100%";
            seconddiv.style.height = "100vh";
            seconddiv.style.position = "fixed";
            seconddiv.style.top = "0";
            seconddiv.style.left = "0";
            seconddiv.style.display = "flex";
            seconddiv.style.backdropFilter = "blur(5px)";
            seconddiv.style.justifyContent = "center";
            seconddiv.style.alignItems = "center";
            seconddiv.innerHTML = `<div id="modal-container">

                                <h4 style="font-weight: bold; color: green;">Let's start</h4>

                                <h2>Welcome to Smart ExpenseTracker?</h2>
                                <br>

                                <p>Sign up and start taking notes.</p>
                                <br>
                                <input type="email" id="email-input" placeholder="Enter your email">
                                <br>
                                <button id="continue-button">Continue</button>

                                <button id="continue-button2"> Continue with Google</button>

                                <button id="continue-button3">Continue with Facebook</button>

                                <button id="close-button2">X</button>
                                <br>
                              </div>`;
            document.body.appendChild(seconddiv);
            document.getElementById("close-button2").addEventListener("click", function () {
                document.body.removeChild(seconddiv);
            });

            function validateUsername(username) {
                if (username.trim() === "") {
                    alert("Email is empty!");
                    return false;
                }
                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!regex.test(username)) {
                    alert("Invalid Email format");
                    return false;
                }
                return true;
            }
            document.getElementById("continue-button").addEventListener("click", function () {
                const username = document.getElementById("email-input").value;
                if (validateUsername(username)) {
                    let newtab = window.open();
                    newtab.location = "haryybhai.html";
                }
            });
        });
    });






    // this is all form button code

    document.querySelectorAll(".form-button").forEach(function (button) {
        button.addEventListener("click", function () {
            let seconddiv = document.createElement("Div");
            seconddiv.style.width = "100%";
            seconddiv.style.height = "100vh";
            seconddiv.style.position = "fixed";
            seconddiv.style.top = "0";
            seconddiv.style.left = "0";
            seconddiv.style.display = "flex";
            seconddiv.style.backdropFilter = "blur(5px)";
            seconddiv.style.justifyContent = "center";
            seconddiv.style.alignItems = "center";
            seconddiv.innerHTML = `<div id="modal-container">

                                    <h4 style="font-weight: bold; color: green;">Let's start</h4>

                                    <h2>Welcome to Smart ExpenseTracker?</h2>
                                    <br>

                                    <p>Sign up and start taking notes.</p>
                                    <br>
                                    <input type="email" id="email-input" placeholder="Enter your email">
                                    <br>
                                    <button id="continue-button">Continue</button>

                                    <button id="continue-button2">Continue with Google</button>

                                    <button id="continue-button3">Continue with Facebook</button>

                                    <button id="close-button2">X</button>
                                    <br>
                                  </div>`;
            document.body.appendChild(seconddiv);
            document.getElementById("close-button2").addEventListener("click", function () {
                document.body.removeChild(seconddiv);
            });




            function validateUsername(username) {
                if (username.trim() === "") {
                    alert("Email is empty!");
                    return false;
                }
                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!regex.test(username)) {
                    alert("Invalid Email format");
                    return false;
                }
                return true;
            }
            document.getElementById("continue-button").addEventListener("click", function () {
                const username = document.getElementById("email-input").value;
                if (validateUsername(username)) {
                    let newtab = window.open();
                    newtab.location = "haryybhai.html";

                }
            });




        });
    });




















});


