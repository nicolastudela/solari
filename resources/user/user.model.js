const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      enum: ["ADMIN", "USER"]
    },
    personalData: new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      },
      picture: {
        type: String,
        required: false
      },
      phone: {
        type: String,
        required: false
      },
      website: {
        type: String,
        required: false
      },
      summary: {
        type: String,
        required: false
      },
      profiles: [
        new mongoose.Schema({
          network: {
            type: String,
            enum: ["FACEBOOK", "LINKEDIN", "INSTAGRAM", "TWITTER"]
          },
          username: String,
          url: String
        })
      ],
      interests: [
        {
          name: String,
          keywords: [String]
        }
      ]
    })
  },
  { timestamps: true }
);

// eslint-disable-next-line consistent-return
// eslint-disable-next-line func-names
userSchema.pre("save", function(next) {
  if (!this.isModified("password")) {
    return next();
  }

  // eslint-disable-next-line consistent-return
  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err);
    }

    this.password = hash;
    next();
  });
});

// eslint-disable-next-line consistent-return
// eslint-disable-next-line func-names
userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err);
      }

      resolve(same);
    });
  });
};

module.exports = mongoose.model("user", userSchema);
