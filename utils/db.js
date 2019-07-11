const mongoose = require("mongoose");
const options = require("../config");

// Create cached connection variable
let cachedDb = null;

const connect = async (url = options.dbUrl, opts = {}) => {
  if (cachedDb) {
    return cachedDb;
  }

  // If no connection is cached, create a new one
  cachedDb = await mongoose.connect(url, { ...opts, useNewUrlParser: true });

  return cachedDb;
};

module.exports = connect;
