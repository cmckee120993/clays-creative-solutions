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
    postId: ID
    postDate: String
    parOneEn: String
    parTwoEn: String
    parOneFr: String
    parTwoFr: String
    title: String
    titleFr: String
    imgOne: String
    imgTwo: String
    comments: [Comment]
    categories: [Category]
}

type Comment {
    commentText: String
    commentDate: String
    commentAuthor: String
}

type Category {
    category: String
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
    addPost(postDate: String, title: String!, titleFr: String! parOneEn: String!, parTwoEn: String!, parOneFr: String!, parTwoFr: String!, imgOne: String, imgTwo: String): Post
    addComment(commentText: String!, commentDate: String, commentAuthor: String): Comment
}
`

module.exports = typeDefs;