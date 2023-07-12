const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: 
    {

        post: async (parent, id) => {
            return Post.findById(id).populate('comments');
        },

        posts: async () => {
            return Post.find({}).populate('comments');
        },

        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById({_id: context.user._id});
                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if(!user) {
                throw new AuthenticationError('Incorrect information');
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect information');
            }
            const token = signToken(user);
            return { token, user };
        },

        addPost: async (parent, args, context) => {
            if(context.user) {
                const post = await Post.create(args);
                return post;
            }
            throw new AuthenticationError('Not logged in');
        },

        addComment: async (parent, args, context) => {
            const comment = await Comment.create(args);
            return comment;
        },
    },
};

module.exports = resolvers;