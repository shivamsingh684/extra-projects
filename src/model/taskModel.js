
const mongoose=require('mongoose')

const taskSchema= new mongoose.Schema({
    title:{type:String},
    discription:{type:String},
    status:{type:String, enum:["Open","In-Progress","Completed"]}
},{timestamps:true})

module.exports=mongoose.model('task',taskSchema)