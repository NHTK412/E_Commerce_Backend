require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/database');
const apiRouter = require('./router/apiRouter');

const app = express();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public'))); // VD: http://localhost:8080/image/NodeJs.png

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// ADD router
app.use('/api', apiRouter);


(async () => {
    try {
        // Connect to MongoDB
        await connectDB();
        app.listen(PORT, HOST, () => {
            console.log(`Server is running on http://${HOST}:${PORT}`);
        }
        );
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);

    }
})();