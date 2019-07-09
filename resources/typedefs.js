const userSchema = require("./user/user.schema");
const ownerSchema = require("./owner/owner.schema");
const resumeSchema = require("./resume/resume.schema");

const schemas = [userSchema, ownerSchema, resumeSchema];

module.exports = schemas;
