const mongoose = require("mongoose");

const genresSchema = new mongoose.Schema({
    genres_name:{type:String, required:true}
})

const Genres = mongoose.model("genres", genresSchema);

module.exports = Genres;