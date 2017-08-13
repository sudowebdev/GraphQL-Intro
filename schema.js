const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull
} = require('graphql');

// Hardcoded data
const customers = [
	{id: '1', name: "Nikhil Arora", email: 'nikhil@gmail.com', age: 20},
	{id: '2', name: "Saumya Tiwari", email: 'saumya@gmail.com', age: 21},
	{id: '3', name: "Dalip Thakkar", email: 'dalip@gmail.com', age: 20}
];



// Customer Type
const CustomerType= new GraphQLOBjectType({
	name: 'Customer',
	fields: () => ({
		id: {type: GraphQLString},
		name: {type: GraphQLString},
		email: {type: GraphQLString},
		age: {type: GraphQLInt}
	})
})


// Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		customer: {
			type: CustomerType
		}
	}
})


module.exports = new GraphQLSchema({

});