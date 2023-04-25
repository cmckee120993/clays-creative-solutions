const mongoose = require('mongoose');
const Comment = require('./Comment.js');

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
    paragraphOne: {
        type: String,
        required: true,
        trim: true
    },
    paragraphTwo: {
        type: String,
        required: false,
        trim: true
    },
    frenchParOne: {
        type: String,
        required: true,
        trim: true
    },
    frenchParTwo: {
        type: String,
        required: false,
        trim: true
    },
    imageLink: {
        type: String,
        required: true,
        trim: true
    },
    comments: [Comment.schema],
    categories: [Category.schema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;