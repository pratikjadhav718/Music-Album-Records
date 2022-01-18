const Album = require("../models/album.model");

module.exports = {
    searchAlbumBySort: async function(req, res, next){

        let sort = req.query.sort;

        if(sort == undefined){
            next();
            return;
        }

        if(sort == "Newest"){

            let album = await Album.find().sort( {year: -1} ).lean().exec();
    
            // console.log(album.length);
            return res.send({album});

        }else if(sort == "Oldest"){
            let album = await Album.find().sort( {year: 1} ).lean().exec();
    
            // console.log(album.length);
            return res.send({album});
        }

        next();
    }
}