const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema ({
    commentText: {
        type: String,
        required: true,
    },
    commentDate: {
        type: Date,
        default: Date.now,
    },
    commentAuthor: {
        type: String,
        required: false,
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;