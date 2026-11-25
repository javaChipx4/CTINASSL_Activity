const mongoose = require("mongoose");

const connectDB = async () => {

    try {
        await mongoose.connect("mongodb://localhost:27017/INF245MWA");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
}

module.exports = connectDB;

