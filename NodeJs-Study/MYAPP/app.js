const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, resp) {
    resp.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, resp) {
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const result = num1 + num2;
    resp.send("Thank you for posting the answer is " + result);
});

app.get('/contact', function(req, resp) {
    resp.send("<h1>Contact Page</h1>");
});

app.get('/about', function(req, resp) {
    resp.send("<h1>About Page</h1>");
});

app.get('/dashboard', function(req, resp) {
    resp.send("<h1>Dashboard Page</h1>");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
