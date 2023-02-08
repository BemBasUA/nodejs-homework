const { User } = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "Email or password is wrong" });
  }
  if (!user.verify) {
    return res.status(401).json({ message: "Email or password is wrong" });
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    return res.status(401).json({ message: "Email or password is wrong" });
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    token,
    user: {
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = { login };
