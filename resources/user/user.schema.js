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

  type AuthPayload {
    user: User!
    token: String!
  }

  extend type Query {
    me: User!
  }

  extend type Mutation {
    signin(email: String, password: String): AuthPayload
  }
`;

module.exports = typeDef;
