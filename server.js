const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

const app = express();

app.use('/graphql', expressGraphQL({
	schema: schema,
	graphiql: true
}))

app.listen(3334, () => {
	console.log("Listening on port 3334");
});