const { Contact } = require("../../models/contact");

const listContacts = async (req, res, next) => {
  const { id: owner } = req.user;
  res.json(await Contact.find({ owner }).populate("owner", "email"));
};

module.exports = { listContacts };
