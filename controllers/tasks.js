

const getAllTasks =(req,res)=>{
    res.send('get all tasks');
}
const createTask = (req,res)=>{
    res.send('create task');
}
const getOneTask = (req,res)=>{
    res.send('get single task');
}
const updataTask = (req,res)=>{
    res.send('update task');
}
const deleteTask = (req,res)=>{
    res.send('delete task');
}

module.exports={
    getAllTasks,
    createTask,
    getOneTask,
    updataTask,
    deleteTask

};