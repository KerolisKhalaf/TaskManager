const asyncWrapper = require('../middleware/async.js');
const Task = require('../models/task.js');
const { createCustomError } = require('../errors/custom-errors.js');


const getAllTasks = asyncWrapper ( async (req,res)=>{
    const task = await Task.find({});
    res.status(200).json({task});
})

const createTask = asyncWrapper( async (req,res)=>{
        const task = await Task.create(req.body);
        res.status(201).json({task});
    }
)
const getOneTask = asyncWrapper(async (req,res,next)=>{
        const {id:taskID} = req.params;
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return next (createCustomError(`no task with id : ${taskID}`,404));
                }
        res.status(200).json({task});
   
})

const updateTask = asyncWrapper( async (req,res,next)=>{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true,});
        if(!task){
            return next (createCustomError(`no task with id : ${taskID}`,404));
        }
        res.status(200).json({id:taskID,data:req.body,task});
   
})

const deleteTask = asyncWrapper(async (req,res,next)=>{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return next (createCustomError(`no task with id : ${taskID}`,404));
        }
        res.status(200).json({task});
})

module.exports={
    getAllTasks,
    createTask,
    getOneTask,
    updateTask,
    deleteTask
    

};