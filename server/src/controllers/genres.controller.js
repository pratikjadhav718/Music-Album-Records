const express = require("express");

const router = express.Router();

const Genres = require("../models/genres.model");

router.post("", async(req, res)=>{
    const genres = await Genres.find({genres_name:req.body.genres_name});

    if(genres.length !==0){
        return res.status(201).send("already exists");
    }

    const newgenres = await Genres.create(req.body);

    return res.status(200).send(newgenres);
})

module.exports = router;