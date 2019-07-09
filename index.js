const { send } = require("micro");
const { router, get, post } = require("microrouter");
const { ApolloServer } = require("apollo-server-micro");
const merge = require("lodash.merge");

const resourcesTypeDefs = require("./resources/typedefs");
const resourcesResolvers = require("./resources/resolvers");

const { commonTypeDefs, commonResolvers } = require("./utils/graphQLCommons");

const apolloServer = new ApolloServer({
  typeDefs: resourcesTypeDefs.concat(commonTypeDefs),
  resolvers: merge(commonResolvers, resourcesResolvers)
});
const graphqlPath = "/graphql";
const graphqlHandler = apolloServer.createHandler({ path: graphqlPath });

const notfound = (req, res) => send(res, 404, "Not found route");
module.exports = router(
  post(graphqlPath, graphqlHandler),
  get(graphqlPath, graphqlHandler),
  get("/", (req, res) => send(res, 200, `Welcome!`)),
  get("/*", notfound)
);
