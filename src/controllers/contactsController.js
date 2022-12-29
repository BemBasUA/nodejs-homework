const contacts = require("../models/contacts");

const Contact = require("../models/contact");

const listContacts = async (req, res, next) => {
  res.json(await Contact.find());
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    res.status(404).json({ message: "Not found" });
  } else {
    res.json(result);
  }
};

const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    res.status(404).json({ message: "Not found" });
  } else {
    res.status(200).json({ message: "contact deleted" });
  }
};

const addContact = async (req, res, next) => {
  res.status(201).json(await contacts.addContact(req.body));
};

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;

  res.json(await contacts.updateContact(contactId, req.body));
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
