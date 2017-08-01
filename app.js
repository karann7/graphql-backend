const express = require('express');
const port = process.env.PORT || 4000;
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');
const app = express();

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log('Server is running!');
});