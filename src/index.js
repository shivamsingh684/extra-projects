const express=require('express')
const route=require('./route/route')
const mongoose= require('mongoose')
const app= express()

app.use(express.json())

mongoose.connect("mongodb+srv://shivamsinghh_684:hFY7Ym3BsbQi0JuT@cluster0.broqahz.mongodb.net/clouddesign",
{useNewUrlParser:true})
.then(()=>console.log("MongoDb is connected"))
.catch(err=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT || 4000,function(){
    console.log("Express app is running on port "+(process.env.PORT||4000))
})