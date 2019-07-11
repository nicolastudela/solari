const resolvers = {
  Query: {
    me(parent, args, context) {
      if (!context.user) return null;
      
      return context.user;
    }
  }
};

module.exports = resolvers;
