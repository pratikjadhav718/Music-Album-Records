const Album = require("../models/album.model");

module.exports = {
    searchAlbum: async function(req, res, next){

        let searchalbum = req.query.searchalbum;

        if(searchalbum == undefined){
            next();
            return;
        }

        
        let album = await Album.find({album_name:req.query.searchalbum}).lean().exec();

        console.log(album);

        return res.send({album});

        next();
    }
}