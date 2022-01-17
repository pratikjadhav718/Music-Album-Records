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

module.exports = router;