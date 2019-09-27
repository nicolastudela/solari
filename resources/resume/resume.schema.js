const { gql } = require("apollo-server-micro");

const typeDef = gql`
  enum LanguageFluency {
    NATIVE
    PROFICIENT
    INTERMEDIATE
    BEGINNER
  }

  enum ProgrammingScope {
    BACK_END
    FRONT_END
    FULL_STACK
  }

  enum ProgrammingLanguage {
    JAVASCRIPT
    JAVA
    SCALA
    RUBY_ON_RAILS
    PHP
  }

  enum SkillLevel {
    ADVANCED
    PROFICIENT
    DEVELOPING
    NOVICE
  }

  type Education {
    institution: String!
    area: String!
    startYear: Int!
    endYear: Int
  }

  type Language {
    language: String!
    fluency: LanguageFluency!
  }

  type WorkExperience {
    _id: String!
    company: String
    companyWebsite: String
    position: String!
    website: String
    current: Boolean
    startDate: Date
    endDate: Date
    summary: String
    highlights: [String]
    scope: ProgrammingScope
    programmingLanguages: [ProgrammingLanguage]
    technologies: [String]
  }

  input WorkExperienceInput {
    company: String
    companyWebsite: String
    position: String!
    website: String
    current: Boolean
    startDate: Date
    endDate: Date
    summary: String
    highlights: [String]
    scope: ProgrammingScope
    programmingLanguages: [ProgrammingLanguage]
    technologies: [String]
  }

  type Skill {
    _id: String!
    name: String!
    level: SkillLevel!
    scope: ProgrammingScope
    keywords: [String]
    priority: Int
  }

  input SkillInput {
    title: String
    name: String!
    level: SkillLevel!
    scope: ProgrammingScope
    keywords: [String]
    priority: Int
  }

  type Resume {
    summary: String
    education: [Education]!
    languages: [Language]!
    workExperiences: [WorkExperience]!
    skills: [Skill]!
  }

  extend type Query {
    resume: Resume!
  }

  extend type Mutation {
    resetResume: Resume
    createSkill(skill: SkillInput): Skill
    removeSkill(id: ID!): ID
    updateSkill(id: ID!, skill: SkillInput): Skill
    createWorkExperience(workExperience: WorkExperienceInput): WorkExperience
    removeWorkExperience(id: ID!): ID
    updateWorkExperience(id: ID!, workExperience: WorkExperienceInput): WorkExperience
  }
`;

module.exports = typeDef;
