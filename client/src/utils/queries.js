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
    posts {
      postDate
      englishPost
      frenchPost
      title
      titleFr
      comments {
        commentText
        commentDate
        commentAuthor
      }
      categories {
        category
      }
    }
    comments {
      commentText
      commentDate
      commentAuthor
    }
  }
}
`;