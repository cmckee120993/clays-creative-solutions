const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    admin: Boolean
    password: String
    posts: [Post]
    comments: [Comment]
}

type Post {
    postDate: Date
    paragraphOne: String
    paragraphTwo: String
    imageLink: String
    comments: [Comment]
}

type Comment {
    commentText: String
    commentDate: Date
    commentAuthor: String
}

type Auth {
    token: ID
    user: User
}

type Query {
    posts: [Post]
}

type Mutation {
    addUser(
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        admin: Boolean
    ): Auth
    login(
        email: String! 
        password: String!
    ): Auth
    addPost(
        postDate: Date 
        paragraphOne: String! 
        paragraphTwo: String!
        imageLink: String
    ): Post
    addComment(
        commentText: String!
        commentDate: Date
        commentAuthor: String
    ): Comment
}
`