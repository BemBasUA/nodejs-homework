const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models/user");
const Jimp = require("jimp");

const avatarsDir = path.join(
  __dirname,
  "../",
  "../",
  "../",
  "public",
  "avatars"
);

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, filename } = req.file;
  console.log(tempUpload);
  await Jimp.read(tempUpload)
    .then((image) => {
      return image.resize(250, 250).write(tempUpload);
    })
    .catch((err) => {
      console.log(err);
    });
  const newFileName = `${_id}_${filename}`;
  const resultUpload = path.join(avatarsDir, newFileName);
  await fs.rename(tempUpload, resultUpload);
  const avatarURL = path.join("avatars", newFileName);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({ avatarURL });
};

module.exports = { updateAvatar };
