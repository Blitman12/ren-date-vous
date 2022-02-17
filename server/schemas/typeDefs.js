const {gql} = require('apollo-server-express')

const typeDefs = gql`

type Query {
    me: User
}

type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveDate(dateId: ID!): User
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
}

type Auth {
    token: ID!
    user: User
}

`;

module.exports = typeDefs