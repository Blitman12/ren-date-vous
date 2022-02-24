import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
      }
      token
    }
  }
`

export const SAVE_DATE = gql`
  mutation saveDate($dateId: ID!) {
    saveDate(dateId: $dateId) {
      _id
      username
      email
      savedDates {
        _id
      }
    }
  }
`;

export const REMOVE_DATE = gql`
mutation removeDate($dateId: ID!) {
    removeDate(dateId: $dateId) {
      _id
      username
      savedDates {
        _id
      }
    }
}
`;

export const ADD_REVIEW = gql`
mutation addReview($rating: Int!, $dateId: ID!) {
  addReview(rating: $rating, dateId: $dateId) {
    title
    reviews {
      rating
      username
    }
  }
}
`;