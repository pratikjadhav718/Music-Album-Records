const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb://localhost:27017/music");
}

// mongodb+srv://musicDb:<password>@cluster0.sbarh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

// mongodb+srv://musicDb:musicDb@123@cluster0.sbarh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority