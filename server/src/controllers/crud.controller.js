

const post = (model) => async(req, res) =>{
    const item = await model.create(req.body);
    
    return res.status(201).send({item});
}

const get = (model) => async(req, res) => {
    const item = await model.find();

    return res.status(201).send({item});
}

const getbyid = (model) => async (req, res) => {
    const item = await model.findById(req.params.id);

    return res.status(200).send({item});
}

const patch = (model) => async (req, res) => {
    const item = await model.findByIdAndUpdate(req.params.id, req.body, {new:true});

    return res.status(200).send({item});
}

const deleteOne = (model) => async (req, res) => {
    const item = await model.findByIdAndDelete(req.params.id);

    return res.status(200).send("Deleted");
}

module.exports = {
    post:post,
    get:get,
    getbyid:getbyid,
    deleteOne:deleteOne,
    patch:patch,
};