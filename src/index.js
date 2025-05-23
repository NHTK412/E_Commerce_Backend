require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');

const app = express();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;


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