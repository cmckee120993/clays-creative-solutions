const { Schema, model, SchemaType } = require('mongoose');
const Comment = require ('./Comment.js');
const Post = require ('./Post.js');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        }, 
        admin: {
            type: Boolean,
            required: true,
            default: false,
        },
        posts: [
            {type: Schema.Types.ObjectId,
            ref: 'Post'}
        ],
        comments: [
            {type: Schema.Types.ObjectId,
            ref: 'Comment'}
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();

});

// method to compare and validate the password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;