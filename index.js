const { send } = require("micro");
const { router, get, post } = require("microrouter");
const { ApolloServer, gql } = require("apollo-server-micro");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const ownerMocked = require("./mocks/owner");

const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
];
const dateFormatter = date =>
  `${months[date.getMonth()]} ${date.getFullYear()}`;

const typeDefs = gql`
  scalar Date

  enum LanguageFluency {
    NATIVE
    PROFICIENT
    INTERMEDIATE
    BEGINNER
  }

  enum ProgrammingScope {
    BACK_END
    FRONT_END
    FULL_STACK
  }

  enum Role {
    ADMIN
    USER
  }

  enum SkillLevel {
    ADVANCED
    PROFICIENT
    DEVELOPING
    NOVICE
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
    profiles: [Profile]
    interests: [Interest]
  }

  type Personal {
    name: String!
    label: String!
    picture: String
    email: String!
    phone: String
    website: String
    summary: String
  }

  type Location {
    city: String!
    countryCode: String!
    country: String!
    address: String
    postalCode: String
  }

  type Profile {
    network: ProfileNetwork
    username: String
    url: String
  }

  type Education {
    institution: String!
    area: String!
    startYear: Int!
    endYear: Int
  }

  type Interest {
    name: String!
    keywords: [String]
  }

  type Language {
    language: String!
    fluency: LanguageFluency!
  }

  type WorkExperience {
    company: String
    position: String!
    website: String
    current: Boolean
    startDate: Date
    endDate: Date
    summary: String
    highlights: [String]
    scope: ProgrammingScope
    programmingLanguages: [String]
    technologies: [String]
  }

  type Skill {
    name: String!
    level: SkillLevel!
    keywords: [String]
  }

  type Resume {
    summary: String
    education: [Education]!
    language: [Language]!
    workExperience: [WorkExperience]!
    skills: [Skill]!
  }

  type Owner {
    user: User!
    location: Location!
    resume: Resume!
  }

  type Query {
    owner: Owner
  }
`;

const resolvers = {
  Query: {
    owner(parent, args, context) {
      return ownerMocked;
    }
  },
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return dateFormatter(value); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  })
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });
const graphqlPath = "/graphql";
const graphqlHandler = apolloServer.createHandler({ path: graphqlPath });

const notfound = (req, res) => send(res, 404, "Not found route");
module.exports = router(
  post(graphqlPath, graphqlHandler),
  get(graphqlPath, graphqlHandler),
  get("/", (req, res) => send(res, 200, `Welcome!`)),
  get("/*", notfound)
);
