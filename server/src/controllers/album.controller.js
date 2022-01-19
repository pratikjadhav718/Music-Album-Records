const express = require("express");
const { searchHandler } = require("../middlewares/middleware1");
const { searchAlbum } = require("../middlewares/middleware2");
const { searchAlbumByGenres } = require("../middlewares/middleware3");
const { searchAlbumBySort } = require("../middlewares/middleware4");

const router = express.Router();

const Album = require("../models/album.model");
const crudController = require("./crud.controller");

router.post("", async(req, res) => {
    const album = await Album.find({album_name:req.body.album_name});

    if(album.length !== 0){
        return res.status(201).send("this album is already exists");
    }

    const newalbum = await Album.create(req.body);

    return res.status(200).send(newalbum);
})

router.get("", searchAlbum, searchAlbumByGenres, searchAlbumBySort, searchHandler, async(req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 4;

    const offset = (page -1 ) * size;

    const album = await Album.find().populate("artist").skip(offset).limit(size).lean().exec();

    const totalAlbumCount = await Album.find().countDocuments();
    // console.log('totalAlbumCount:', totalAlbumCount)

    const totalPages = Math.ceil(totalAlbumCount/ size);

    return res.send({album, totalPages});
})

router.get("/:name", async(req, res)=>{
    const item = await Album.find({album_name:req.params.name}).populate("song_list").populate("artist");
    // console.log('item:', item)

    return res.status(200).send(item);
})

// router.get("/:id", crudController.getbyid(Album));
router.patch("/:id", crudController.patch(Album));
module.exports = router;