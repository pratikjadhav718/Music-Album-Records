const Album = require("../models/album.model");

module.exports = {
    searchHandler: async function(req, res, next){

        let searchalbum = req.query.searchalbum;

        if(searchalbum == undefined){
            next();
            return;
        }

        let keyword = (req.query.searchalbum).toLowerCase();
        let album = await Album.find().lean().exec();
        let albumTitleArr = [];
        for(let i =0; i<album.length; i++){
            albumTitleArr.push(album[i].album_name);
        }
        let newArr = [];
        for(let i =0; i<albumTitleArr.length; i++){
            if(albumTitleArr[i].toLowerCase().includes(keyword)){
                newArr.push(albumTitleArr[i]);
            }
        }
        console.log("newArr",newArr);
        

        // let album = await Album.find().lean().exec();



        console.log(req.query);
        console.log("I am in Search handlers");
        next();
    }
}