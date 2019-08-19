const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  summary: {
    type: String,
    required: false
  },
  education: [
    new mongoose.Schema({
      institution: {
        type: String,
        required: true
      },
      area: {
        type: String,
        required: true
      },
      startYear: {
        type: Number,
        required: true
      },
      endYear: Number
    })
  ],
  languages: [
    new mongoose.Schema({
      language: {
        type: String,
        required: true
      },
      fluency: {
        type: String,
        required: true,
        enum: ["NATIVE", "PROFICIENT", "INTERMEDIATE", "BEGINNER"]
      }
    })
  ],
  workExperiences: [
    new mongoose.Schema({
      company: String,
      companyWebsite: String,
      position: {
        type: String,
        required: true
      },
      website: String,
      current: Boolean,
      startDate: Date,
      endDate: Date,
      summary: String,
      highlights: [String],
      scope: {
        type: String,
        enum: ["BACK_END", "FRONT_END", "FULL_STACK"]
      },
      programmingLanguages: [String],
      technologies: [String]
    })
  ],
  skills: [
    new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      level: {
        type: String,
        required: true,
        enum: ["ADVANCED", "PROFICIENT", "DEVELOPING", "NOVICE"]
      },
      keywords: [String],
      scope: {
        type: String,
        enum: ["BACK_END", "FRONT_END", "FULL_STACK"]
      },
      priority: Number
    })
  ],
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "user",
    required: true
  }
});

module.exports = mongoose.model("resume", resumeSchema);
