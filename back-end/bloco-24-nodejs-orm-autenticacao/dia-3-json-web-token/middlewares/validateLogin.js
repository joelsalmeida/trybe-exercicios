const { loginSchema } = require('../schemas/loginSchema');

const validateLogin = (req, _res, next) => {
  const { body } = req;
  const { error } = loginSchema.validate(body);
  if (error) return next(error);
};

module.exports = { validateLogin };
