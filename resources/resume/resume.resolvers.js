/* eslint-disable no-underscore-dangle */
const merge = require("lodash.merge");
const Resume = require("./resume.model");
const resumeMock = require("./_mocks/resumeMock");

const resolvers = {
  Query: {
    resume() {
      return Resume.findOne()
        .lean()
        .exec();
    }
  },
  Mutation: {
    resetResume: async (parent, args, { user }) => {
      if (!user || user.role !== "ADMIN") {
        return new Error("Admin operation only");
      }
      const resume = await Resume.findOneAndReplace(
        { createdBy: user._id },
        merge({}, resumeMock, { createdBy: user._id }),
        { new: true, upsert: true }
      )
        .lean()
        .exec();
      return resume;
    }
  }
};

module.exports = resolvers;
