const express = require('express');
const  router =express.Router();



const {
    getAllTasks,
    createTask,
    getOneTask,
    updataTask,
    deleteTask
    
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getOneTask).patch(updataTask).delete(deleteTask);



module.exports = router;

