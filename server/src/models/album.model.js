const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    album_name:{type:String, required:true},
    year:{type:Number, required:true},
    artist:{type:mongoose.Schema.Types.ObjectId, ref:"artist", required:false},
    song_list:[
        {type:mongoose.Schema.Types.ObjectId, ref:"song", required:false}
    ],
    genres:{type:mongoose.Schema.Types.ObjectId, ref:"genres", required:false}
})

const Album = mongoose.model("album", albumSchema);

module.exports = Album;