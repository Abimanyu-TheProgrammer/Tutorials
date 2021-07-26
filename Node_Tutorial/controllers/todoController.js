var task_list = [{item:"Buy Milk"}, {item:"Buy Meat"}, {item: "Buy Bread"}, {item: "Buy Cheese"}]
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var urlencodedParser = bodyParser.urlencoded({ extended: false })


//connect to the database
mongoose.connect("mongodb+srv://test:12345@cluster0.13e9u.mongodb.net/Node_Data0?retryWrites=true&w=majority")

// object modelling
todoSchema = new mongoose.Schema({
    item : String
})

Todo = mongoose.model("Todo", todoSchema)


module.exports = function (app) {
    app.get("/todo", function(req, res){
        console.log("A get request was made")
        Todo.find({}, function(err, data){
            if(err) throw err
            res.render("todo", {tasks : data})
        })
    })

    app.post("/todo", urlencodedParser , function(req, res){
        console.log("A post request was made")
        var newTodo = Todo({item : req.body.item}).save(function(err,data){
            if (err) throw err
            console.log("Item saved")
            res.json(data)
        })
    })

    app.delete("/todo/:item", function(req, res){
        console.log("A delete request was made")
        Todo.find({item : req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
            if (err) throw err
            res.json(data)
        })
    })
}