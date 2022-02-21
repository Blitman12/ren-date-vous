import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
        _id
        username
        email
        savedDates {
            dateId
            description
            title
            image
        }
    }
}
`;