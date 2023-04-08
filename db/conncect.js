const mongoose = require("mongoose");



const dbConnect = (url) => {
    console.log("database is connected with returning promise");
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = dbConnect;