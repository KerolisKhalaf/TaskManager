const mongoose = require('mongoose')



const connectDB = (url) =>{
return mongoose.connect(url, {
    dbName: 'task-manager',
})
}

module.exports = connectDB;