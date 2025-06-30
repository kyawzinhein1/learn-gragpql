const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const root = require("./resolver");

const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 4000;
const { connectDB } = require("./db");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enables the GraphiQL UI
  })
);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
