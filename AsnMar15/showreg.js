const express = require("express");
const app = express();
const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  console.log(__dirname);
  /*res.sendFile(__dirname + "/userform.html");*/
  const completePath = path.join(__dirname, "Registration.html");
  res.sendFile(completePath);
});

app.post("/register", function (req, res) {
  console.log(req.body);
  let result = `<style>body{background:lightblue}table{border:4px solid black} table{background:blueviolet} table{box-shadow:10px 10px 10px black}table{margin:100px auto} td{border:3px solid black} h1{text-align:center} h1{color:blue}</style><h1>Registered User</h1><table><tr><th>User Name</th><th>Email</th><th>Password</th><th>DOB</th><th>City</th><th>Country</th></tr><tr><td> ${req.body.name}</td><td>${req.body.email}</td><td>${req.body.password}</td><td>${req.body.dob}</td><td>${req.body.city}</td><td>${req.body.country}</td></tr> 
  
  </table>`;
  res.send(result);
});
app.listen(3001);
console.log("Program started");
