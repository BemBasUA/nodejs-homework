const { register } = require("./register");
const { login } = require("./login");
const { getCurrent } = require("./getCurrent");
const { logout } = require("./logout");
const { verify } = require("./verify");

const authController = {
  register,
  login,
  getCurrent,
  logout,
  verify,
};

module.exports = {
  authController,
};
