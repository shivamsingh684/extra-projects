const taskModel= require('../model/taskModel')

const createTask= async function(req,res){
try{
    let data=req.body
    let {title,discription,status,}=data
    if(!Object.keys(data).length) return res.status(400).send({status:false,message:"All fields are mandatory"})

    if(!title) return res.status(400).send({status:false,message:"Please provide title"})
    if(!discription) return res.status(400).send({status:false,message:"Please give discription"})
    if(!status) return res.status(400).send({status:false,messgae:"Please give status of work"})

    let taskCreate= await taskModel.create(data)
    return res.status(201).send({status:true,message:"task Created", data:taskCreate})
}catch(error){
    return res.status(500).send({status:false,message:error.message})
}
}

 //===================================📝Edit Task📝================================================

const editTask= async function(req,res){
try{
    let taskId=req.params.taskId
    let data=req.body
    let {title,discription,status}=data
    if(!Object.keys(data).length) return res.status(400).send({status:false,message:"Please provide key to Update"})
    let updateTask=await taskModel.findOneAndUpdate({taskId},{$set:data},{new:true})
    return res.status(200).send({status:true,message:"Update Successfully",data:updateTask})

}catch(error){
    return res.status(500).send({status:false,messgae:error.message})
}
}

// =====================================📝 Get All Task List 📝==========================================

const getTask=async function (req,res){
try{
    let taskList=req.query
    let {status}=taskList
    if(status){
        let allTask= await taskModel.find({status})
        return res.status(200).send({status:true,message:"Task List", data:allTask})
    }else{
        let allTask= await taskModel.find()
        return res.status(200).send({status:true,message:"Task List", data:allTask})
    }
}catch(error){
    return res.status(500).send({status:false,message:error.meggage})
}
}

// ==================================📝 delete task 📝=============================================
const deleteTask= async function(req,res){
    try{
        let taskId=req.params.taskId
        let deleteTask=await taskModel.deleteOne({taskId})
        return res.status(200).send({status:true,message:"deleted Successfully"})
    
    }catch(error){
        return res.status(500).send({status:false,messgae:error.message})
    }
    }

// ============================================================================================

module.exports={createTask,editTask,getTask,deleteTask}