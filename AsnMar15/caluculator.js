const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  let completePath = path.join(__dirname, "/calculator.html");
  res.sendFile(completePath);
});
app.post("/operation", function (req, res) {
  console.log(req.body);

  if (req.body.operation == "addition") {
    const sum = parseInt(req.body.input1) + parseInt(req.body.input2);
    let htmlResponse = `<style>body{background:lightblue}div{border:2px solid black}div{background:grey}</style><div>
    <h2>
        Addition of ${req.body.input1} and ${req.body.input2} is ${sum}
    </h2>
</div>`;
    res.send(htmlResponse);
  }

  if (req.body.operation == "subtraction") {
    const sub = parseInt(req.body.input1) - parseInt(req.body.input2);
    let htmlResponse = `<style>body{background:lightblue}div{border:2px solid black} div{background:grey}</style>
    <div>
        <h2>
            Subtraction of ${req.body.input1} and ${req.body.input2} is ${sub}
        </h2>
    </div>`;

    res.send(htmlResponse);
  }
  if (req.body.operation == "multiplication") {
    const mul = parseInt(req.body.input1) * parseInt(req.body.input2);
    let htmlResponse = `<style>body{background:lightblue}div{border:2px solid black} div{background:grey}</style>
    <div>
        <h2>
            Multiplication of ${req.body.input1} and ${req.body.input2} is ${mul}
        </h2>
    </div>`;

    res.send(htmlResponse);
  }
  if (req.body.operation == "division") {
    const div = parseInt(req.body.input1) / parseInt(req.body.input2);
    let htmlResponse = `<style>body{background:lightblue}div{border:2px solid black} div{background:grey}</style>
    <div>
        <h2>
            Division of ${req.body.input1} and ${req.body.input2} is ${div}
        </h2>
    </div>`;

    res.send(htmlResponse);
  }
});
app.listen(3001);
console.log("Program started");
