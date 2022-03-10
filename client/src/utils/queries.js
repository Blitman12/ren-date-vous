import { gql } from '@apollo/client';

export const GET_ME = gql`
query findUser{
    me {
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
`;

export const GET_CATDATES = gql`
query ($category: String!){ 
    categorizedDates(category: $category){
      _id
      title
      description
      image
      rating
    }
  }
`;

export const DATES = gql`
query {
  dates{
    _id
    title
    description
    image
    rating
  }
}
`;

export const GET_SAVEDATES = gql`
  query {
    savedDates {
          title
          description
          _id
          image
          reviews {
            rating
            username
          }
      }
    }
`;