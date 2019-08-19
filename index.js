const { send } = require("micro");
const { router, get, post, options } = require("microrouter");
const { ApolloServer } = require("apollo-server-micro");
const merge = require("lodash.merge");
const cors = require("micro-cors")();

const resourcesTypeDefs = require("./resources/typedefs");
const resourcesResolvers = require("./resources/resolvers");
const connect = require("./utils/db");
const { commonTypeDefs, commonResolvers } = require("./utils/graphQLCommons");
const { internalSignup, getUserFromRequest } = require("./utils/auth");

const apolloServer = new ApolloServer({
  typeDefs: resourcesTypeDefs.concat(commonTypeDefs),
  resolvers: merge(commonResolvers, resourcesResolvers),
  context: async ({ req }) => {
    // try to retrieve a user with the token
    const user = await getUserFromRequest(req);

    // add the user to the context
    return {
      user
      // TODO: Think if we want to have the live user-object here or just the plain JS object.
      // models: {
      //   User: generateUserModel({ user })
      // }
    };
  }
});
const graphqlPath = "/graphql";
const graphqlHandler = apolloServer.createHandler({ path: graphqlPath });

const notfound = (req, res) => send(res, 404, "Not found route");

const routerr = router(
  cors(post(graphqlPath, graphqlHandler)),
  cors(get(graphqlPath, graphqlHandler)),
  cors(options(graphqlPath, (req, ress) => send(ress, 200, `Working`))),
  cors(post("/internalSignup", internalSignup)),
  cors(get("/", (req, ress) => send(ress, 200, `Welcome!`))),
  cors(get("/*", notfound))
);

module.exports = async (req, res) => {
  await connect();
  return routerr(req, res);
};
