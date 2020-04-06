/* eslint-disable no-underscore-dangle */
const { AuthenticationError } = require("apollo-server-micro");
const merge = require("lodash.merge");
const Resume = require("./resume.model");
const resumeMock = require("./_mocks/resumeMock");

const isAdminUser = user => user && user.isAdmin;

const crudResolvers = (resumeSubdocument, resourceName) => {
  const create = async (parent, args, { user }) => {
    if (!isAdminUser(user)) {
      return new AuthenticationError("Admin operation only");
    }

    const resume = await Resume.findOne({ createdBy: user._id });

    const newEntity = resume[resumeSubdocument].create(args[resourceName]);
    resume[resumeSubdocument].push(newEntity);

    await resume.save();

    return newEntity;
  };

  const remove = async (parent, args, { user }) => {
    if (!isAdminUser(user)) {
      return new AuthenticationError("Admin operation only");
    }

    const resume = await Resume.findOne({ createdBy: user._id });
    resume[resumeSubdocument].pull(args.id);
    await resume.save();

    return args.id;
  };

  const update = async (parent, args, { user }) => {
    if (!isAdminUser(user)) {
      return new AuthenticationError("Admin operation only");
    }
    const resume = await Resume.findOne({ createdBy: user._id });
    const entity = resume[resumeSubdocument].id(args.id);
    entity.set(args[resourceName]);

    await resume.save();

    return entity;
  };

  const resourceSuffix =
    resourceName.charAt(0).toUpperCase() + resourceName.slice(1);

  return {
    [`create${resourceSuffix}`]: create,
    [`remove${resourceSuffix}`]: remove,
    [`update${resourceSuffix}`]: update
  };
};

const resolvers = {
  Query: {
    resume() {
      // TODO The resume find should be more specific about geting the owner resume only
      return Resume.findOne()
        .lean()
        .exec();
    },
    nicolasTudelaSiteExperience: async () => {
      // TODO The resume find should be more specific about geting the owner resume only
      const resume = await Resume.findOne()
        .lean()
        .exec();
      const nicoWorkExperience = resume.workExperiences.filter(
        we => we.company === "nicolastudela.com"
      )[0];
      return nicoWorkExperience;
    }
  },
  Mutation: Object.assign(
    {
      resetResume: async (parent, args, { user }) => {
        if (user && !user.isAdmin) {
          return new AuthenticationError("Admin operation only");
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
    },
    crudResolvers("skills", "skill"),
    crudResolvers("workExperiences", "workExperience")
  )
};

module.exports = resolvers;
