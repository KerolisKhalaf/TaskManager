const asyncWrapper = require('../middleware/async');
const Task = require('../models/task');


const getAllTasks = asyncWrapper ( async (req,res)=>{
    const task = await Task.find({});
    res.status(200).json({task});
})

const createTask = asyncWrapper( async (req,res)=>{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }
)
const getOneTask = asyncWrapper(async (req,res)=>{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskID}`});
        }
        res.status(200).json({task});
   
})

const updataTask = asyncWrapper( async (req,res)=>{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true,});
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskID}`});
        }
        res.status(200).json({id:taskID,data:req.body,task});
   
})

const deleteTask = asyncWrapper(async (req,res)=>{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:`no task with id : ${taskID}`});
        }
        res.status(200).json({task});
})

module.exports={
    getAllTasks,
    createTask,
    getOneTask,
    updataTask,
    deleteTask
    

};