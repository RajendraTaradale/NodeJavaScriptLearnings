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

console.log('--------------------9------------------------');