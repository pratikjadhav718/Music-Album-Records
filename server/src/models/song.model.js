const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    song_name:{type:String, required:true},
    song_duration:{type:Number, required:true}
})

const Song = mongoose.model("song", songSchema);

module.exports = Song;