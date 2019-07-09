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
    personalData: Personal!
    role: Role!
    email: String!
    profiles: [Profile]
    interests: [Interest]
  }

  type Personal {
    name: String!
    label: String!
    picture: String
    phone: String
    website: String
    summary: String
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
`;

module.exports = typeDef;
