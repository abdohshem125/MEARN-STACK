const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema1 = require("./graphql/schema1");
const resolvers1 = require("./graphql/resorver1");
const graphqlSchema2 = require("./graphql/schema2");
const { createHandler } = require("graphql-http/lib/use/express");
const { ruruHTML } = require("ruru/server");

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

const formatError = (err) => {
  if (!err.originalError) {
    return err;
  } else {
    const data = err.originalError.data;
    const code = err.originalError.code;
    const message = err.message;
    return {
      message,
      code,
      data,
    };
  }
};

app.use(
  "/graphql/schema1",
  graphqlHTTP({
    schema: schema1,
    rootValue: resolvers1,
    graphiql: true,
    formatError,
  })
);

app.all(
  "/graphql/schema2",
  createHandler({
    schema: graphqlSchema2,
    formatError,
  })
);

app.get("/graphiql/schema2", (req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql/schema2" }));
});

app.get("/", (req, res) => {
  res.send("Welcome to GraphQL");
});

app.listen(3000, () => console.log(`Server running at http://localhost:3000/`));
