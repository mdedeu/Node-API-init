const express = require('express');
const Joi = require('joi')

const router = express.Router()

let photosPerPage = 10;
let photos = [];
    

router.post('/upload', (req, res) => {
    const schema = Joi.object({
        url: Joi.string(),
        description: Joi.string().min(3).required(),
        user: Joi.string().required(),     
    })

    const result = schema.validate(req.body);
    
    if(result.error){
        res.status(400).send(result.error)
        return;
    }

    if(!req.body.url || req.body.url.length < 3 ){
        res.status(400).send('Url missing')
    }
    const photo = {
        photo_id: photos.length + 1,
        photo_file: req.body.url,
        description: req.body.description,
        user: req.body.user,
        likes: 0,
        page: 1,
        timestamp: Date.now()
    }
    photos.push(photo)
    res.send(photo);
})

module.exports = router