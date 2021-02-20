const express = require("express")
const app = express()
const mongoose = require("mongoose");
const todo = require("./model/todo")
const cors=require("cors");
app.use(express.json())
app.use(cors());
// sharafat todo is a database
mongoose.connect("mongodb://127.0.0.1:27017/sharafatTodo").then(() => {
    console.log("connected to database");
}).catch(e => {
    console.log();
})


app.get("/", (req, res, next) => {
    todo.find((err, success) => {
        if (err) {
            console.log(err);
        }
        res.json(success)
    })

})
// insert
app.post("/", (req, res, next) => {
    let insertTodo = new todo({
        title: req.body.title,
        completed: req.body.completed
    })

    insertTodo.save((err, success) => {
        if (err) {
            res.json(err)
        }
        res.json(success)
    })


})

app.put("/updateTodo/:id", (req, res, next) => {
    let updateTodo={
        title: req.body.title,
        completed: req.body.completed
    }
        todo.updateOne({ _id: req.params.id },updateTodo,(err,success)=>{
            if(err) throw err;
            res.json(success)
        })
        
})

app.delete("/:id", (req, res, next) => {
    todo.deleteOne({_id: req.params.id}, (err, success) => {
        if (err) {
            console.log(err);
        }
        res.json(success)
    })
})





// server is running
app.listen("2000", () => {
    console.log("server is running");
})