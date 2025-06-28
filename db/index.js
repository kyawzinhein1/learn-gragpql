const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionResponse = await mongoose.connect(
            `${process.env.MONGO_URL}`,
        );
        console.log(
            "DB connected successfully",
            connectionResponse.connection.host
        );
    } catch (error) {
        console.log("DB connection error", error);
        process.exit(1);
    }
};

module.exports = { connectDB };
