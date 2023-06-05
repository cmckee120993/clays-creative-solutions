import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
`;

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
  }
}
`;

export const ADD_POST = gql`
mutation addPost($title: String!, $titleFr: String!, $parOneEn: String!, $parTwoEn: String!, $parOneFr: String!, $parTwoFr: String!, $postDate: String, $imgOne: String, $imgTwo: String) {
  addPost(title: $title, titleFr: $titleFr, parOneEn: $parOneEn, parTwoEn: $parTwoEn, parOneFr: $parOneFr, parTwoFr: $parTwoFr, postDate: $postDate, imgOne: $imgOne, imgTwo: $imgTwo) {
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
`;