const Album = require("../models/album.model");

module.exports = {
    searchAlbumBySort: async function(req, res, next){

        let sort = req.query.sort;
        // console.log('sort:', sort)

        if(sort == undefined){
            next();
            return;
        }

        if(sort == "Newest"){
            
            // console.log(album.length);
            const page = +req.query.page || 1;
            const size = +req.query.size || 4;
            const offset = (page -1 ) * size;
            
            let album = await Album.find().populate("artist").sort( {year: -1} ).skip(offset).limit(size).lean().exec();

            const totalAlbumCount = await Album.find().countDocuments();
            // console.log('totalAlbumCount:', totalAlbumCount)
        
            const totalPages = Math.ceil(totalAlbumCount/ size);

            return res.send({album, totalPages});

        }else if(sort == "Oldest"){
            const page = +req.query.page || 1;
            const size = +req.query.size || 4;
            const offset = (page -1 ) * size;

            let album = await Album.find().populate("artist").sort( {year: 1} ).skip(offset).limit(size).lean().exec();
    
            const totalAlbumCount = await Album.find().countDocuments();
            const totalPages = Math.ceil(totalAlbumCount/ size);

            // console.log(album.length);
            return res.send({album, totalPages});
        }

        next();
    }
}