const express = require('express');
const Post = require('../models/Post')

const router = express.Router()

router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.send(posts)
})

module.exports = router