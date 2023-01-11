const { Contact } = require("../../models/contact");

const addContact = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.status(201).json(result);
};

module.exports = { addContact };
