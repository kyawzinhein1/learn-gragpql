const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type User {
      id: ID!
      name: String!
      age: Int
    }

    type Product {
      id: ID!
      name: String!
      price: Float!
    }
  
    type Query {
      user(id: ID!): User
      users: [User]
      product(id: ID!): Product
      products: [Product]
    }

    type Mutation {
      createUser(name: String!, age: Int!): User
      updateUser(id: ID!, name: String, age: Int): User
      deleteUser(id: ID!): Boolean

      createProduct(name: String!, price: Float!): Product
      updateProduct(id: ID!, name: String, price: Float): Product
      deleteProduct(id: ID!): Boolean
    }
`);

module.exports = schema;
