const { updateAvatar } = require("./updateAvatar");
const { resendEmail } = require("./resendEmail");

const usersController = {
  updateAvatar,
  resendEmail,
};

module.exports = {
  usersController,
};
