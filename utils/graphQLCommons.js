const { gql } = require("apollo-server-micro");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const { fromDateFormatter } = require("./dateFormatter");

const root = gql`
  scalar Date

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return fromDateFormatter(value); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  })
};

module.exports = {
  commonTypeDefs: root,
  commonResolvers: resolvers
};
