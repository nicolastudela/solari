const jwt = require("jsonwebtoken");
const merge = require("lodash.merge");
const safeGet = require("lodash.get");
const { send, json } = require("micro");
const User = require("../resources/user/user.model");
const ownerMocked = require("../mocks/owner");

const config = require("../config");

const AUTH_HEADER_REGEXP = /Bearer (.+)/;

const newToken = user => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    config.secrets.jwt,
    {
      expiresIn: config.secrets.jwtExp
    }
  );
};

const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

const internalSignup = async (req, res) => {
  try {
    const body = await json(req);
    const user = await User.create(
      merge(ownerMocked.user, { password: body.password })
    );
    const token = newToken(user);
    return send(res, 201, { token });
  } catch (error) {
    console.log(error);
    return send(res, 400, { error });
  }
};

const getUserFromRequest = async req => {
  const authHeader = safeGet(req, ["headers", "authorization"]);
  const match = authHeader && authHeader.match(AUTH_HEADER_REGEXP);
  const token = match && match[1];
  const userFromHeader = token && (await verifyToken(token));
  if (userFromHeader) {
    return User.findById(userFromHeader.id.toString(), "-password")
      .lean({ virtuals: true })
      .exec();
  }

  return null;
};

module.exports = {
  verifyToken,
  getUserFromRequest,
  internalSignup,
  newToken
};
