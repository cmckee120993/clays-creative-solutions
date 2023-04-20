const mongoose = require('mongoose');
const Comment = require('./Comment.js');

const { Schema } = mongoose;

const postSchema = new Schema({
    postDate: {
        type: Date,
        default: Date.now
    },
    paragraphOne: {
        type: String,
        required: true,
        trim: true
    },
    paragraphTwo: {
        type: String,
        required: true,
        trim: true
    },
    imageLink: {
        type: String,
        required: true,
        trim: true
    },
    comments: [Comment.schema],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;