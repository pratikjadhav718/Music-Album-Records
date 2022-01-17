const express = require("express");

const connect = require("./config/db");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const artistController = require("./controllers/artist.controller");

app.use("/artist", artistController);

app.get("/", (req, res)=>{
    console.log("getting get request at /");
    return res.status(200).send("hello");
})

//-----------------------Server Port ------------------//

app.listen(2345,async function(){
    await connect();
    console.log("Listening to port 2345")
})