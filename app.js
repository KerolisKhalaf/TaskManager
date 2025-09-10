const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect'); //database connection
require('dotenv').config();
const notFound = require('./middleware/not-found'); // 404 middleware
//middleware
app.use(express.static('./public'))
app.use(express.json());

//routs

app.use('/api/v1/tasks', tasks);
app.use(notFound);


//server

const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();

