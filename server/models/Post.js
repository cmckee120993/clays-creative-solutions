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
    englishPost: {
        type: String,
        required: true,
        trim: true
    },
    frenchPost: {
        type: String,
        required: false,
        trim: true
    },
    comments: [Comment.schema],
    categories: [Category.schema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;