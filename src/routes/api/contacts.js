const express = require("express");

const { schemas } = require("../../models/contact");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateFavorite,
} = require("../../controllers/contactsController");

const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", schemas.idValidation, getContactById);

router.post("/", schemas.addContactValidation, addContact);

router.delete("/:contactId", schemas.idValidation, removeContact);

router.put(
  "/:contactId",
  schemas.idValidation,
  schemas.updateContactValidation,
  updateContact
);
router.patch(
  "/:contactId/favorite",
  schemas.idValidation,
  schemas.updateFavoriteValidation,
  updateFavorite
);

module.exports = router;
