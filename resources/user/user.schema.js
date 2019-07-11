const { gql } = require("apollo-server-micro");

const typeDef = gql`
  enum Role {
    ADMIN
    USER
  }

  enum ProfileNetwork {
    FACEBOOK
    LINKEDIN
    INSTAGRAM
    TWITTER
  }

  type User {
    id: ID!
    personalData: Personal
    role: Role!
    email: String!
  }

  type Personal {
    name: String!
    label: String!
    picture: String
    phone: String
    website: String
    summary: String
    profiles: [Profile]
    interests: [Interest]
  }

  type Profile {
    network: ProfileNetwork
    username: String
    url: String
  }

  type Interest {
    name: String!
    keywords: [String]
  }

  extend type Query {
    me: User!
  }
`;

module.exports = typeDef;
