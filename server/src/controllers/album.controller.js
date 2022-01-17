const express = require("express");

const router = express.Router();

const Album = require("../models/album.model");

router.post("", async(req, res) => {
    const album = await Album.find({album_name:req.body.album_name});

    if(album.length !== 0){
        return res.status(201).send("this album is already exists");
    }

    const newalbum = await Album.create(req.body);

    return res.status(200).send(newalbum);
})

router.get("", async(req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 4;

    const offset = (page -1 ) * size;

    const album = await Album.find().skip(offset).limit(size).lean().exec();

    const totalAlbumCount = await Album.find().countDocuments();

    const totalPages = Math.ceil(totalAlbumCount/ size);

    return res.send({album, totalPages});
})

module.exports = router;