// Mongoose models
const Transaction = require('../models/Transaction');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require("graphql");

// Client Type.  The convention is to use uppercase C in TransactionType
const TransactionType = new GraphQLObjectType({
  name: "Transaction",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    status: { type: GraphQLString },
    typeofaccount: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    transactions: {
      type: new GraphQLList(TransactionType),
      resolve(parent, args) {
        return Transaction.find();
      },
    },
    transaction: {
      type: TransactionType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Transaction.findById(args.id);
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
    name:"Mutation",
    fields: {
        addTransaction: {
            type: TransactionType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                status: { type: new GraphQLNonNull(GraphQLString) },
                typeofaccount: { type: new GraphQLNonNull(GraphQLString) },
                email: { type:new GraphQLNonNull(GraphQLString) },
                phone: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const transaction = new Transaction({
                    name: args.name,
                    status: args.status,
                    typeofaccount: args.typeofaccount,
                    email: args.email,
                    phone: args.phone
                });
    
                return transaction.save();
            }
        }
    }
    });

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
});
