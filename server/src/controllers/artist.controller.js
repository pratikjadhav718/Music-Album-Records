const express = require("express");

const router = express.Router();

const Artist = require("../models/artist.model");

router.post("", async(req, res)=>{
    const newArtist = await Artist.find({name:req.body.name});

    if(newArtist.length != 0){
        return res.status(201).send(true);
    }

    const artist = await Artist.create(req.body);

    return res.status(200).send(artist);
})

module.exports = router;