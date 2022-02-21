const {gql} = require('apollo-server-express')

const typeDefs = gql`

type Query {
    me: User
}

type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveDate(dateId: ID!): User
    removeDate(dateId: ID!): User
    addReview(rating: Int!, username: String!, dateId: ID!): Date
}

type User {
    _id: ID!
    username: String!
    email: String!
    savedDates: [Date]
}

type Date {
    _id: ID!
    title: String!
    image: String!
    reviews: [Review]
    reviewCount: Int!
    rating: Int!
}

type Review {
    rating: Int!
    username: String!
}

type Auth {
    token: ID!
    user: User
}

`;

module.exports = typeDefs