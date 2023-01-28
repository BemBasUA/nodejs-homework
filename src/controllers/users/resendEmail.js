const { User } = require("../../models/user");
const { sendEmail } = require("../../helpers/sendEmail");
require("dotenv").config();

const { BASE_URL } = process.env;

const resendEmail = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "missing required field email" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { verificationToken } = user;
  if (user.verify) {
    return res
      .status(400)
      .json({ message: "Verification has already been passed" });
  }
  const verifyEmail = {
    to: email,
    subject: "Verify Email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click verify email<a/>`,
  };
  await sendEmail(verifyEmail);
  return res.status(200).json({ message: "Verification email sent" });
};

module.exports = {
  resendEmail,
};
