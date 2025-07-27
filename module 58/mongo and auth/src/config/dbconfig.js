const mongoose = require("mongoose")
const serverConfig = require("./serverConfig")

async function connectDB() {
    try {
        await mongoose.connect(serverConfig.DB_URL);
        console.log("SuccessFully connected to the mongo db server...");
    } catch (error) {
        console.log("not abale to connect");
        console.log(error);
    }
}
module.exports = connectDB;