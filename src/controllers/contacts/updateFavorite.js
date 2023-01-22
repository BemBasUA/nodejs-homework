const { Contact } = require("../../models/contact");

const updateFavorite = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.json(result);
};

module.exports = { updateFavorite };
