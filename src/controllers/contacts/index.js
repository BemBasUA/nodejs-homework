const { listContacts } = require("./listContacts");
const { addContact } = require("./addContact");
const { getContactById } = require("./getContactById");
const { removeContact } = require("./removeContact");
const { updateContact } = require("./updateContact");
const { updateFavorite } = require("./updateFavorite");

const contactsController = {
  listContacts,
  addContact,
  getContactById,
  removeContact,
  updateContact,
  updateFavorite,
};

module.exports = {
  contactsController,
};
