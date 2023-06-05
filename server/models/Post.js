const mongoose = require('mongoose');
const Comment = require('./Comment.js');
const Category = require('./Category.js');

const { Schema } = mongoose;

const postSchema = new Schema({
    postDate: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    titleFr: {
        type: String,
        required: true,
        trim: true
    },
    parOneEn: {
        type: String,
        required: true,
        trim: true
    },
    parTwoEn: {
        type: String,
        required: true,
        trim: true
    },
    parOneFr: {
        type: String,
        required: true,
        trim: true
    },
    parTwoFr: {
        type: String,
        required: true,
        trim: true
    },
    imgOne: {
        type: String,
        trim: true
    }, 
    imgTwo: {
        type: String, 
        trim: true
    },
    comments: [Comment.schema],
    categories: [Category.schema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;