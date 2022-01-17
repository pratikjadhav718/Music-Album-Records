const Album = require("../models/album.model");

module.exports = {
    searchAlbumByGenres: async function(req, res, next){

        let genre = req.query.genre;

        if(genre == undefined){
            next();
            return;
        }

        
        let album = await Album.find({genres:req.query.genre}).lean().exec();

        console.log(album.length);

        return res.send({album});

        next();
    }
}