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
      postId
      postDate
      parOneEn
      parTwoEn
      parOneFr
      parTwoFr
      title
      titleFr
      imgOne
      imgTwo
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

export const GET_POSTS = gql`
query getPosts {
  posts {
    postId
    postDate
    parOneEn
    parTwoEn
    parOneFr
    parTwoFr
    title
    titleFr
    imgOne
    imgTwo
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