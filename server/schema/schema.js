const { projects, transactions } = require('../sampleData.js')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

// Client Type.  The convention is to use uppercase C in ClientType
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        status: { type: GraphQLString },
        type: { type: GraphQLString },

        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        transactions: {
            type: new GraphQLList(ClientType),
            resolve(parent, args) {
                return transactions;
            }
        },
        transaction: {
            type: ClientType,
            args: {id: { type: GraphQLID }},
            resolve(parent, args) {
                return transactions.find(transaction => transaction.id === args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})