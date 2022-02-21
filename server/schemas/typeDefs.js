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
    addReview(rating: Number!, username: String!, dateId: ID!): Date
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
    reviewCount: Number!
    rating: Number!
}

type Review {
    rating: Number!
    username: String!
}

type Auth {
    token: ID!
    user: User
}

`;

module.exports = typeDefs