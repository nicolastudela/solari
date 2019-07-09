const ownerMocked = require("../../mocks/owner");

const resolvers = {
  Query: {
    owner() {
      return ownerMocked;
    }
  }
};

module.exports = resolvers;
