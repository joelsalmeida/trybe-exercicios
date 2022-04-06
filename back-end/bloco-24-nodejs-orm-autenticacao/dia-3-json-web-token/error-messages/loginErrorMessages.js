const userName = {
  minimumLength: '"username" length must be 5 characters long',
  required: '"username" is required',
};

const password = {
  minimumLength: '"password" length must be 5 characters long',
  required: '"password" is required',
};

module.exports = { userName, password };
