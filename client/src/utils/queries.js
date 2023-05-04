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
      paragraphOne
      paragraphTwo
      imageLink
      comments {
        commentText
        commentDate
        commentAuthor
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