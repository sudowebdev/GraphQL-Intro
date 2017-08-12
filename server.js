const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();


app.listen(3334, () => {
	console.log("Listening on port 3334");
});