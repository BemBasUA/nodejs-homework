const express = require("express");

const { schemas } = require("../../models/contact");

const { contactsController } = require("../../controllers/index");

const { authenticate } = require("../../middlewares/index");

const router = express.Router();

router.get("/", authenticate, contactsController.listContacts);

router.get(
  "/:contactId",
  authenticate,
  schemas.idValidation,
  contactsController.getContactById
);

router.post(
  "/",
  authenticate,
  schemas.addContactValidation,
  contactsController.addContact
);

router.delete(
  "/:contactId",
  authenticate,
  schemas.idValidation,
  contactsController.removeContact
);

router.put(
  "/:contactId",
  authenticate,
  schemas.idValidation,
  schemas.updateContactValidation,
  contactsController.updateContact
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  schemas.idValidation,
  schemas.updateFavoriteValidation,
  contactsController.updateFavorite
);

module.exports = router;
