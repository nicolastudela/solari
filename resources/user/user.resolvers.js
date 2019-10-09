const { AuthenticationError } = require("apollo-server-micro");
const User = require("./user.model");
const { newToken } = require("../../utils/auth");

const resolvers = {
  Query: {
    me(parent, args, context) {
      if (!context.user) return null;

      return context.user;
    }
  },
  Mutation: {
    signin: async (_, { email, password }, context) => {
      if (context.user) {
        throw new AuthenticationError("User already logged");
      }
      const user = await User.findOne({ email });

      if (!user || !(await user.checkPassword(password))) {
        throw new AuthenticationError("user or password not match");
      }

      const token = newToken(user);

      return { user, token };
    }
  }
};

module.exports = resolvers;
