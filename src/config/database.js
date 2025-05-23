const mongoose = require('mongoose');

const option = {
    pass: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    dbName: process.env.DB_NAME
};

const dbState = [
    { value: 0, label: "disconnected" },
    { value: 1, label: "connected" },
    { value: 2, label: "connecting" },
    { value: 3, label: "disconnecting" }
];

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_HOST, option);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find((element) => element.value === state).label, "To DB");
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

module.exports = connectDB;