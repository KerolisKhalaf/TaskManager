const express = require('express');
const app = express();
const tasks = require('./routes/tasks.js');
const connectDB = require('./db/connect.js'); //database connection
require('dotenv').config();
const notFound = require('./middleware/not-found.js'); // 404 middleware
const errorHandlerMiddleware = require('./middleware/error-handler.js'); // error handler middleware

//middleware
app.use(express.json());
app.use(express.static('./public'));



//routs
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);


//server
const port= process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();

