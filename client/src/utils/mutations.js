import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedDates {
          _id
          title
          image
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
        savedDates {
            _id
            title
            image
        }
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
      reviewCount
    }
  }
`;

export const REMOVE_DATE = gql`
mutation removeDate($dateId: ID!) {
    removeDate(dateId: $dateId) {
      _id
      username
    }
}
`;