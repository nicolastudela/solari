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
    company: String
    position: String!
    website: String
    current: Boolean
    startDate: Date
    endDate: Date
    summary: String
    highlights: [String]
    scope: ProgrammingScope
    programmingLanguages: [String]
    technologies: [String]
  }

  type Skill {
    name: String!
    level: SkillLevel!
    keywords: [String]
  }

  type Resume {
    summary: String
    education: [Education]!
    language: [Language]!
    workExperience: [WorkExperience]!
    skills: [Skill]!
  }
`;

module.exports = typeDef;
