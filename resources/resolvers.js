const merge = require("lodash.merge");

const ownerResolvers = require("./owner/owner.resolvers");
const userResolvers = require("./user/user.resolvers");

module.exports = merge(ownerResolvers, userResolvers);
