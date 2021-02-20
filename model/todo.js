const mongoose=require("mongoose");
const todoSchema=mongoose.Schema({
    title:{
        type:String
    },
    completed:{
        type:Boolean
    }
})

// creating table
todo=mongoose.model("todoTable",todoSchema)

module.exports=todo;