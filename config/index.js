/* eslint-disable global-require */
const merge = require("lodash.merge");

const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  secrets: {
    jwt: process.env.SOLARI_JWT_SECRET,
    jwtExp: "100d"
  },
  dbUrl: process.env.SOLARI_MONGODB_URI
};

let envConfig = {};

switch (env) {
  case "dev":
  case "development":
    envConfig = require("./dev");
    break;
  case "test":
  case "testing":
    envConfig = require("./testing");
    break;
  case "production":
  case "prod":
    envConfig = require("./prod");
    break;
  default:
    envConfig = require("./dev");
}

module.exports = merge(baseConfig, envConfig);
