const { gql } = require("apollo-server-micro");

const typeDef = gql`
  type Owner {
    user: User!
    location: Location!
    resume: Resume!
  }

  type Location {
    city: String!
    countryCode: String!
    country: String!
    address: String
    postalCode: String
  }

  extend type Query {
    owner: Owner!
  }
`;

module.exports = typeDef;
