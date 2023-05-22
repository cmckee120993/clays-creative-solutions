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
mutation addPost($title: String!, $titleFr: String!, $englishPost: String!, $frenchPost: String!, $postDate: String) {
  addPost(title: $title, titleFr: $titleFr, englishPost: $englishPost, frenchPost: $frenchPost, postDate: $postDate) {
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
}
`;