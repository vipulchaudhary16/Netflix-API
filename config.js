const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
// const LOCAL_DB = 'mongodb://0.0.0.0:27017/'

connectToDatabase = () => {
    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connection Successful");
    }).catch((e) => {
        console.log("Connection Failed\n", e);
    });
}

module.exports = { connectToDatabase };