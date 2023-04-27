import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query User {
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