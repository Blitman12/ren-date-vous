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
      title
      description
      image
    }
  }
`;