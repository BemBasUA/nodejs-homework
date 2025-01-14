const express = require("express");

const router = express.Router();

const { authenticate, upload } = require("../../middlewares/index");

const { usersController } = require("../../controllers/index");

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  usersController.updateAvatar
);
router.post("/verify", usersController.resendEmail);

module.exports = router;
