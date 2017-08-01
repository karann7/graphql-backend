const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

//Hardcoded data

const customers = [
  {id: '1', name: 'John Doe', email: 'jodoe@gmail.com', age:35},
  {id: '2', name: 'Jane Doe', email: 'jadoe@gmail.com', age:37},
  {id: '3', name: 'Jacky Doe', email: 'jacdoe@gmail.com', age:38},
];

// Type - defines the schema of a customer;
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    age: {type: GraphQLInt}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
    type: CustomerType,
    args: {
      id: {type: GraphQLString}
    },
    resolve(parentValue, args){
      return customers.find((customer) => customer.id == args.id);
    }
  }
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
});