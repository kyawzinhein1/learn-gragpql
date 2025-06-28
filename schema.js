const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type User {
      id: ID!
      name: String!
      age: Int
    }
  
    type Query {
      hello: String
      greet(name: String!): String
      randomNumber: Int
      user(id: ID!): User
      users: [User]
    }
  `);

module.exports = schema;
