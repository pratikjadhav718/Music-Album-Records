const express = require("express");

const router = express.Router();

const Song = require("../models/song.model");

router.post("", async(req, res) => {
    const song = await Song.find({song_name:req.body.song_name});

    if(song.length !== 0){
        return res.status(201).send("This song already exists");
    }

    const newsong = await Song.create(req.body);

    return res.status(200).send(newsong);
})

module.exports = router;