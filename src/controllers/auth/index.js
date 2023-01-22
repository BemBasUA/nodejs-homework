const { register } = require("./register");
const { login } = require("./login");
const { getCurrent } = require("./getCurrent");
const { logout } = require("./logout");

const authController = {
  register,
  login,
  getCurrent,
  logout,
};

module.exports = {
  authController,
};
