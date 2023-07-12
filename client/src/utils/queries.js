import { gql } from '@apollo/client';

export const GET_USER = gql`
    query getUserData {
      user {
    _id
    firstName
    lastName
    email
    admin
    password
    comments {
      commentText
      commentDate
      commentAuthor
    }
    posts {
      categories {
        category
      }
      comments {
        commentText
        commentDate
        commentAuthor
      }
      content
      postId
      title
      postDate
    }
  }
}
`;

export const GET_POSTS = gql`
query getPosts {
  posts {
    _id
    postDate
    title
    content
    comments {
      commentText
      commentDate
      commentAuthor
    }
    categories {
      category
    }
  }
}
`

export const GET_POST = gql`
query getPost($id: ID!) {
  post(_id: $id) {
    _id
    content
    postDate
    title
  }
}
`