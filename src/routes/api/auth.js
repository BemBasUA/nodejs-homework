const express = require("express");

const router = express.Router();

const { schemas } = require("../../models/user");

const { authController } = require("../../controllers/index");

const { authenticate } = require("../../middlewares/index");

module.exports = router;

router.post("/register", schemas.authValidation, authController.register);

router.post(
  "/login",

  schemas.authValidation,
  authController.login
);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);
