const JOI = require('joi');

const { userName, password } = require('../error-messages/loginErrorMessages');

const loginSchema = JOI.object({
  username: JOI.string().min(5).alphanum().required().messages({
    'string.min': userName.minimumLength,
    'string.required': userName.required,
  }),
  password: JOI.string().min(5).required().messages({
    'string.min': password.minimumLength,
    'string.required': password.required,
  }),
});

module.exports = { loginSchema };
