let sum = a => b => b ? sum(a + b) : a;

console.log(sum(10)(20)(3)(4)());

console.log('------------------2--------------------------');

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("trigger", (sc, msg) => {
  console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("trigger", 200, "ok");

console.log('----------------------3----------------------');
const fs = require("fs");

const data = fs.readFileSync("data.txt", "utf-8");
console.log(data);
console.log('data');
fs.readFile("data.txt", "utf-8", (err, data) => {
    console.log(data);
});
console.log("after the data");  // check at the end 

let raj = fs.readFileSync("raj.json");
// data buffer we get, we use toString to get the original string back
raj = raj.toString();
console.log(raj);

 //Write file and replace old data
 //fs.writeFileSync("raj.json", "Yahoooooooo");

// we can append the data at the end
//  fs.appendFileSync(
//    "raj.json",
//    " Got it........"
//  );

// we can rename the file
//fs.renameSync("rajnew.txt", "raj.txt");

// we can also check the file path
console.log(fs.realpathSync("data.txt"));

console.log('--------------------4------------------------');
const os = require("os");

console.log(os.hostname());
console.log(os.homedir());
console.log(os.platform());
console.log(os.arch());
console.log(os.tmpdir());
console.log(os.type());

const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024}`);

const totalMemory = os.totalmem();
console.log(`${totalMemory / 1024 / 1024 / 1024}`);
console.log('---------------------5-----------------------');
const path = require("path");

const myPath = path.parse("C:\Users\admin\Pictures\Rajendra.png");
console.log(myPath);
console.log('---------------------6-----------------------');
const http = require("http");
const fetch = require("cross-fetch");
//import fetch from 'cross-fetch';
const server = http.createServer((req, res) => {
    const datas = fs.readFileSync("raj.json");
    console.log(datas);
    const objData = JSON.parse(datas);
  
    // console.log(req.url);
    if (req.url == "/") {
      res.end("Welcome to Home Page");
    } else if (req.url == "/about") {
      res.end("My name is Rajendra and i work in software company");
    } else if (req.url == "/contact") {
      res.end("You can contact me on rajendra.taradale@gmail.com");
    } else if (req.url == "/file") {
      res.end(JSON.stringify(objData));
    } else if (req.url == "/http") {
        const https = require('https');
        https.get('https://api.github.com/users/rajendrataradale', (resp) => {
            let dt = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                dt += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                console.log(JSON.parse(dt));
                res.end(JSON.stringify(JSON.parse(dt)));
            });

            }).on("error", (err) => {
            console.log("Error: " + err.message);
            });
       
    } else if (req.url == "/fetch") {
        debugger;
        fetch('https://api.github.com/users/rajendrataradale')
        .then(ress => {
            debugger;
          if (ress.status >= 400) {
            throw new Error("Bad response from server");
          }
          res.end(ress.json());
        })
        .then(user => {
          console.log(user);
        })
        .catch(err => {
            debugger;
          console.error(err);
        });
    } else if (req.url == "/request") {
        request('https://api.github.com/users/rajendrataradale', { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body.url);
            console.log(body.explanation);
            res.end(res)
          });
    } else {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1> Sorry this page doesn't exist </h1>");
    }
  });
  
  server.listen(8200, "127.0.0.1", () => {
    console.log("listening to the port no 8200");
  });
console.log('-----------------------7---------------------');
const add = (a, b) => {
    return a + b;
  };
  
  const sub = (a, b) => {
    return a - b;
  };

  const name = "Rajendra Taradale";
  
  // module.exports.add1 = add;
  // module.exports.sub1 = sub;
  // module.exports.mult1 = mult;
module.exports = { add, sub, name };
//In other file
// const { add, sub, name, mult } = require("./oper");

// console.log(add(5, 5));
// console.log(sub(10, 5));
// console.log(name);

console.log('---------------------8-----------------------');

var p1 = {firstName: 'Rajendra', lastName: 'Taradale'};
var p2 = {firstName: 'Sushant', lastName: 'Patil'};

function say(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
// Call invokes the function and allows you to pass in arguments one by one.
say.call(p1, 'Hello'); 
say.call(p2, 'Hello'); 

// Apply invokes the function and allows you to pass in arguments as an array.
say.apply(p1, ['apply Hello','Welcome']);
say.apply(p2, ['apply Hello']);

// Bind returns a new function, allowing you to pass in a this array and any number of arguments.
var sayHelloRaj = say.bind(p1);
sayHelloRaj('123 :');

console.log('--------------------9------------------------');

//The map() method is used for creating a new array from an existing one, 
//applying a function to each one of the elements of the first array.

const numbers1 = [1, 2, 3, 4];
const doubled = numbers1.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

//The filter() method takes each element in an array and it applies a conditional statement against it.
// If this conditional returns true, the element gets pushed to the output array.
// If the condition returns false, the element does not get pushed to the output array.

const numbers2 = [1, 2, 3, 4];
const evens = numbers2.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

//The reduce() method reduces an array of values down to just one value. 
//To get the output value, it runs a reducer function on each element of the array.

const numbers3 = [1, 2, 3, 4];
const sums = numbers3.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sums); // 10

numbers3.forEach(function (element) {
  console.log(element);
});

console.log('--------------------10------------------------');
function doSomething(){}
doSomething.prototype.name = "rajendra taradale";
console.log(doSomething.prototype);

var a = {a: 1};

var b = Object.create(a);

console.log(a.a); // print 1
console.log(b.a); // print 1
b.a=5;
console.log(a.a); // print 1
console.log(b.a); // print 5
delete b.a;
console.log(a.a); // print 1
console.log(a.hasOwnProperty('a'));

console.log('--------------------11------------------------');
//How to create objects in JavaScript
//1. Creating objects using object literal syntax
const person = {
  firstName: 'testFirstName',
  lastName: 'testLastName'
};
//2. Creating objects using the ‘new’ keyword
const persons = new Object();

//3. Using Object.create() to create new objects
//The Object.create() method creates a new object, 
//using an existing object as the prototype of the newly created object.
const orgObject = { company: 'Raj Corp' };
const employees = Object.create(orgObject, { name: { value: 'newEmp' } });
console.log(employees.company); // { company: "Raj Corp" }
console.log(employees.name); // "newEmp"
//4. Using Object.assign() to create new objects
//The Object.assign() method is used to copy the values of all enumerable own properties
// from one or more source objects to a target object. It will return the target object.

const cmpObject = { company: 'Raj Corp' }
const carObject = { carName: 'Maruti' }

const dt22 = Object.assign({}, orgObject, carObject);

console.log(dt22); // { carName: "Ford", company: "Raj Corp" }
//5. Using ES6 classes to create objects

console.log('--------------------12------------------------');

const yourArray = [1, 1, 2, 3, 4, 5, 5]

const yourArrayWithoutDuplicates = [...new Set(yourArray)]

let duplicates = [...yourArray]
yourArrayWithoutDuplicates.forEach((item) => {
  const i = duplicates.indexOf(item)
  duplicates = duplicates
    .slice(0, i)
    .concat(duplicates.slice(i + 1, duplicates.length))
})

console.log(duplicates) //[ 1, 5 ]

// --- 2
let duplicatess = []

const tempArray = [...yourArray].sort()

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicatess.push(tempArray[i])
  }
}

console.log(duplicates) //[ 1, 5 ]

//https://flaviocopes.com/tags/js/
console.log('--------------------12------------------------');