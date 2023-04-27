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
    postDate: String
    paragraphOne: String
    paragraphTwo: String
    imageLink: String
    comments: [Comment]
}

type Comment {
    commentText: String
    commentDate: String
    commentAuthor: String
}

type Auth {
    token: ID
    user: User
}

type Query {
    posts: [Post]
    user: User
}

type Mutation {
    addUser(
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        admin: Boolean
    ): Auth
    login( email: String!, password: String!): Auth
    addPost(postDate: String, paragraphOne: String!, paragraphTwo: String!, imageLink: String): Post
    addComment(commentText: String!, commentDate: String, commentAuthor: String): Comment
}
`

module.exports = typeDefs;