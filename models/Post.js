const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    url: {
       type: String,
       required: true
    }
})