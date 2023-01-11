const { Schema, model } = require("mongoose");
const Joi = require("joi");
const ObjectId = require("mongoose").Types.ObjectId;

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const Contact = model("contact", contactSchema);

const addContactValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.alternatives(Joi.number(), Joi.string()).required(),
  });
  const validationResult = schema.validate(req.body);
  if (validationResult.error) {
    return res
      .status(400)
      .json({ message: validationResult.error.details[0].message });
  }
  next();
};
const updateContactValidation = (req, res, next) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "missing fields" });
  }
  next();
};

const idValidation = (req, res, next) => {
  if (!ObjectId.isValid(req.params.contactId)) {
    return res.status(404).json({ message: "Not found" });
  }
  next();
};

const updateFavoriteValidation = (req, res, next) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "missing field favorite" });
  }
  next();
};

const schemas = {
  addContactValidation,
  updateContactValidation,
  idValidation,
  updateFavoriteValidation,
};

module.exports = {
  Contact,
  schemas,
};
