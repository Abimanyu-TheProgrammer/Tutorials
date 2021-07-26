
// requirements
var express = require("express")
var app = express()
var todoController = require("./controllers/todoController")
var path = require('path')

// View engine and serve static files
app.set("view engine", "ejs")
app.use("/assets",express.static('assets'))

// controllers
todoController(app)


// Port 3000
app.listen(3000)
console.log("Listening to port 3000")