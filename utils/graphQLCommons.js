const { gql } = require("apollo-server-micro");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const parseISO = require("date-fns/parseISO");
const formatDate = require("date-fns/format");

const root = gql`
  scalar LocalDate
  scalar LocalDateTime
  scalar DateTime

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }
`;

const resolvers = {
  LocalDate: new GraphQLScalarType({
    name: "LocalDate",
    description: "LocalDate custom scalar type",
    parseValue(value) {
      return parseISO(value); // value from the client
    },
    serialize(value) {
      return formatDate(value, "yyyy-MM-dd"); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  }),
  LocalDateTime: new GraphQLScalarType({
    name: "LocalDate",
    description: "LocalDate custom scalar type",
    parseValue(value) {
      return parseISO(value); // value from the client
    },
    serialize(value) {
      return formatDate(value, "yyyy-MM-dd[T]HH:mm"); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  }),
  DateTime: new GraphQLScalarType({
    name: "LocalDate",
    description: "LocalDate custom scalar type",
    parseValue(value) {
      return parseISO(value); // value from the client
    },
    serialize(value) {
      return value.toISOString(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  }),
};

module.exports = {
  commonTypeDefs: root,
  commonResolvers: resolvers
};
