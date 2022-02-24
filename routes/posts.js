const express = require('express');
const Joi = require('joi')

const Post = require('../models/Post');

const router = express.Router()

let photosPerPage = 10;
let photos = [];
    

router.post('/upload', async (req, res) => {
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
    const post = new Post({
      url: req.body.url,
      user: req.body.user,
      description: req.body.description,
      likes: 0,
      page: 1,  
    });
    
    try{
        const savedPost = await post.save();
        res.status(200).json(data)
    }catch{
        res.status(500).json({ message: error})
    }

    res.send(post);
})

module.exports = router