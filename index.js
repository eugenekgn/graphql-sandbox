const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const PORT = 3003;

const app = new express();


app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}))

app.listen(PORT, () => {
	console.log('listening on port ', PORT);
});