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
mutation addPost($title: String!, $content: String!, $postDate: String) {
  addPost(title: $title, content: $content, postDate: $postDate) {
    postId
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
    postDate
  }
}
`;