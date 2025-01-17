const express = require("express");

const router = express.Router();

const { schemas } = require("../../models/user");

const { authController } = require("../../controllers/index");

const { authenticate } = require("../../middlewares/index");

router.post("/register", schemas.authValidation, authController.register);

router.get("/verify/:verificationToken", authController.verify);

router.post(
  "/login",

  schemas.authValidation,
  authController.login
);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

module.exports = router;
